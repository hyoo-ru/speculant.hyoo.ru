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
		days() {
			const history_length = this.indicator( this.currency_chart()[0] ).history.length
			const arr = new Array( history_length ).fill( '' )
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
		
		balance_list() {
			return this.currency_all().map( id => {
				return `${ id }: ${ this.indicator( id ).have.toFixed( 2 ) } `
			} )
		}

	}

}
