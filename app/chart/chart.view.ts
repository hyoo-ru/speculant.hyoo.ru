namespace $.$$ {

	export class $hyoo_speculant_app_chart extends $.$hyoo_speculant_app_chart {
		
		@ $mol_mem
		currency_names() {
			return Object.keys( this.model().indicators() ).filter( key => key !== 'CSH' )
		}
		
		@ $mol_mem
		day_start() {
			return new this.$.$mol_time_moment
		}
		
		@ $mol_mem
		days() {
			const history_length = this.indicator( this.currency_names()[0] ).history.length
			const arr = new Array( history_length ).fill( '' )
			const days = arr.map( ( _ , index ) => this.day_start().shift( { day: index } ).toString( 'MM-DD' ) )
			return days.slice( - this.chart_zoom() )
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
			return this.indicator( id ).history.slice( - this.chart_zoom() )
		}
		
		@ $mol_mem
		linear_list() {
			return [
				... this.currency_names().map( id => this.Linear( id ) ) ,
				... super.linear_list() ,

			]
		}
		
		@ $mol_mem
		buy_buttons() {
			return this.currency_names().map( id => this.Buy_button( id ) )
		}
		
		@ $mol_mem
		sell_buttons() {
			return this.currency_names().map( id => this.Sell_button( id ) )
		}
		
		buy( id : string ) {
			this.model().exchange( id , 1 )
		}
		
		sell( id : string ) {
			this.model().exchange( id , -1 )
		}

	}

}
