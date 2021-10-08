namespace $.$$ {

	export class $hyoo_speculant_app_chart extends $.$hyoo_speculant_app_chart {
		
		@ $mol_mem
		currency_names() {
			return [ 'KBK' , 'BRT' , 'RIK' ]
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
				... this.currency_names().map( id => this.Linear( id ) ) ,
				... super.linear_list() ,

			]
		}

	}

}
