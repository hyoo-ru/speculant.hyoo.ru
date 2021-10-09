namespace $.$$ {

	export class $hyoo_speculant_app_dashboard extends $.$hyoo_speculant_app_dashboard {
		
		@ $mol_mem
		currency_all() {
			return this.model().profiles()[ this.model().profile() ].indicators as $hyoo_speculant_world_indicator_codes[]
		}
		
		@ $mol_mem
		currency_work() {
			return this.currency_all().filter( key => key !== 'CSH' ) as $hyoo_speculant_world_indicator_codes[]
		}
		
		@ $mol_mem_key
		indicator( id : string ) {
			return this.model().indicators()[ id ] as $hyoo_speculant_world_indicator
		}

		@ $mol_mem_key
		currency_name( id : string ) {
			return this.indicator( id ).name
		}	
		
		buy( id: $hyoo_speculant_world_indicator_codes ) { 
			this.model().exchange( id , 1 )
		}
		
		sell( id: $hyoo_speculant_world_indicator_codes ) {
			this.model().exchange( id , -1 )
		}

		@ $mol_mem_key
		currency_have( id: $hyoo_speculant_world_indicator_codes ) {
			return this.indicator( id ).have.toString()
		}
		
		@ $mol_mem_key
		rate( id: $hyoo_speculant_world_indicator_codes ) {
			return this.indicator( id ).current.toString()
		}
		
		balance_total() {
			const list = this.currency_work().map( id => this.indicator( id ) )
			const sum = list.reduce( ( sum , cur ) => {
				return sum + ( cur.current * cur.have )
			} , 0 )
			return ( sum + this.indicator( 'CSH' ).have ).toLocaleString()
		}
		
		@ $mol_mem
		balance_cash_title() {
			return this.indicator( 'CSH' ).name
		}
		
		@ $mol_mem
		balance_cash() {
			return this.indicator( 'CSH' ).have.toLocaleString()
		}
		
		@ $mol_mem
		currency_list() {
			return this.currency_work().map( id => this.Row( id ) )
		}
		
		@ $mol_mem_key
		Currency_diff( id : string ) {
			const indicator = this.indicator( id )
			return indicator.diff > 0 ? this.Icon_currency_up( id ) : this.Icon_currency_down( id )
		}
		
		@ $mol_mem_key
		currency_icon_link( id : string ) {
			return this.indicator( id ).icon
		}
		
		@ $mol_mem
		date() {
			return this.model().time().toString( 'DD Mon' )
		}
	}

}
