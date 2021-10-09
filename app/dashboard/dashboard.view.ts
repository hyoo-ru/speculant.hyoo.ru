namespace $.$$ {

	export class $hyoo_speculant_app_dashboard extends $.$hyoo_speculant_app_dashboard {
		
		@ $mol_mem
		currency_all() {
			return Object.keys( this.model().indicators() )  as $hyoo_speculant_world_indicator_codes[]
		}
		
		@ $mol_mem
		currency_chart() {
			return this.currency_all().filter( key => key !== 'CSH' ) as $hyoo_speculant_world_indicator_codes[]
		}
		
		@ $mol_mem
		day_start() {
			return new this.$.$mol_time_moment
		}
		
		@ $mol_mem
		history_length() {
			return this.indicator( this.currency_chart()[0] ).history.length
		}
		
		@ $mol_mem
		days() {
			const arr = new Array( this.history_length() ).fill( '' )
			return arr.map( ( _ , index ) => this.day_start().shift( { day: index } ).toString( 'MM-DD' ) )
		}

		@ $mol_mem_key
		indicator( id : string ) {
			return this.model().indicators()[ id ] as $hyoo_speculant_world_indicator
		}

		@ $mol_mem_key
		linear_title( id : string ) {
			return this.indicator( id ).name
		}	
		
		@ $mol_mem_key
		linear_series( id : string ) {
			return this.indicator( id ).history
		}
		
		@ $mol_mem
		linear_list() {
			return [
				... this.currency_chart().map( id => this.Linear( id ) ) ,
				... super.linear_list() ,

			]
		}
		
		buy( index: number ) { 
			this.model().exchange( this.currency_chart()[ index ] , 1 )
		}
		
		sell( index: number ) {
			this.model().exchange( this.currency_chart()[ index ] , -1 )
		}

		@ $mol_mem_key
		currency_have( index: number ) {
			return this.indicator( this.currency_chart()[ index ] ).have.toString()
		}
		
		@ $mol_mem_key
		rate( index: number ) {
			return this.indicator( this.currency_chart()[ index ] ).current.toString()
		}
		
		balance_total() {
			const list = this.currency_chart().map( id => this.indicator( id ) )
			const sum = list.reduce( ( sum , cur ) => {
				return sum + ( cur.current * cur.have )
			} , 0 )
			return ( sum + this.indicator( 'CSH' ).have ).toFixed( 2 )
		}

	}

}
