namespace $.$$ {

	export class $hyoo_speculant_app extends $.$hyoo_speculant_app {
		
		persist() {
			return !!this.$.$mol_state_arg.value( 'persist' )
		}
		
		restart() {
			this.$.$mol_state_arg.dict( {} )
			this.model( new this.$.$hyoo_speculant_world )
		}

		@ $mol_mem
		age( next?: string ) {
			if ( this.persist() ) return this.$.$mol_state_arg.value( 'age' )
			return this.model().age( next )
		}

		@ $mol_mem
		profile( id: string ) {
			return this.model().profiles()[ id ]
		}
		
		@ $mol_mem
		name( next?: string ) {
			return this.$.$mol_store_local.value( 'name' , next )
		}
		
		select_profile( next?: string ) {
			if ( this.persist() ) return this.$.$mol_state_arg.value( 'profile' )
			return this.model().profile( next )
		}
		
		start() {
			this.model().age( 'intro' )
		}
		
		profile_dict() {
			return Object.keys( this.model().profiles() ).reduce( ( dict , id ) => {
				const profile = this.profile( id )
				dict[id] = profile.title
				return dict
			} , {} )
		}
		
		@ $mol_mem_key
		indicator( id : string ) {
			return this.model().indicators()[ id ] as $hyoo_speculant_world_indicator
		}

		@ $mol_mem
		pages() {
			const persist = this.$.$mol_state_arg.value( 'persist' )
			if ( persist ) {
				return [
					this.Page_final() ,
					... this.chat_pages() ,
				]
			}

			return [
				... ( this.age() === 'ready' ? [ this.Page_profile() ] : []) ,
				... ( ['go','intro'].includes( this.age()! ) ? [ this.Page_dashboard() ] : []) ,
				... ( this.age() === 'finish' ? [ this.Page_final() ] : []) ,
				... this.chat_pages(),
			]
		}
		
		@ $mol_mem
		final_text() {
			return super.final_text().replace( '{balance}' , String( Number(this.balance_total().replace( /\D/gsu , '' )) - 1000 ))
		}
		
		@ $mol_mem_key
		portfolio_title( id : string ) {
			if ( id === 'BALANCE' ) return 'Баланс'
			return this.indicator( id ).name
		}
		
		@ $mol_mem_key
		portfolio_have( id : string ) {
			if ( this.persist() ) return this.$.$mol_state_arg.value( id )!
			if ( id === 'BALANCE' ) return this.balance_total()
			return this.indicator( id ).have.toString()
		}
		
		@ $mol_mem
		currency_all() {
			return this.model().profiles()[ this.select_profile() ].indicators as $hyoo_speculant_world_indicator_codes[]
		}

		@ $mol_mem
		currency_work() {
			return this.currency_all().filter( key => key !== 'CSH' ) as $hyoo_speculant_world_indicator_codes[]
		}

		balance_total() {
			const list = this.currency_work().map( id => this.indicator( id ) )
			const sum = list.reduce( ( sum , cur ) => {
				return sum + ( cur.current * cur.have )
			} , 0 )
			return ( sum + this.indicator( 'CSH' ).have ).toString()
		}

		@ $mol_mem
		portfolio() {
			return [ 'BALANCE' , 'CSH', ... this.currency_all() ].map( id => this.Portfolio_item( id ) )
		}
		
		@ $mol_mem
		persist_final() {
			const ids = [ 'BALANCE' , 'CSH' , ... this.currency_all() ]

			return this.$.$mol_state_arg.dict( {
				persist: 'true' ,
				age: 'finish' ,
				profile: this.select_profile() ,
				... ids.reduce( ( dict , id ) => {
					dict[ id ] = this.portfolio_have( id )
					return dict
				}, {} ) ,
			} )
		}
		
		auto() {
			$mol_fiber_defer( () => {
				if ( !this.persist() && this.age() === 'finish' ) {
					this.persist_final()
				}
			} )
		}
		
		share_uri() {
			return this.$.$mol_dom_context.location.href
		}
		
	}

}
