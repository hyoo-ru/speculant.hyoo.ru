namespace $.$$ {

	export class $hyoo_speculant_app extends $.$hyoo_speculant_app {
		
		@ $mol_mem
		age( next?: string ) {
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
			return this.model().profile( next )
		}
		
		start() {
			this.model().age( 'go' )
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

		pages() {
			return [
				... ( this.age() === 'ready' ? [ this.Page_profile() ] : []) ,
				... ( this.age() === 'go' ? [ this.Page_dashboard() ] : []) ,
				... ( this.age() === 'finish' ? [ this.Page_final() ] : []) ,
				... this.chat_pages(),
			]
		}
		
		@ $mol_mem
		final_text() {
			return super.final_text().replace( '{balance}' , String( Number(this.balance_total()) - 1000 ))
		}
		
		@ $mol_mem_key
		portfolio_title( id : string ) {
			return this.indicator( id ).name
		}
		
		@ $mol_mem_key
		portfolio_have( id : string ) {
			return this.indicator( id ).have.toString()
		}
		
		@ $mol_mem
		currency_all() {
			return this.model().profiles()[ this.model().profile() ].indicators as $hyoo_speculant_world_indicator_codes[]
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
			return [
				this.Balance_total() ,
				... this.currency_all().map( id => this.Portfolio_item( id ) )
			]
		}
		
	}

}
