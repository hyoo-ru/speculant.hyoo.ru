namespace $.$$ {

	export class $hyoo_speculant_app_chart extends $.$hyoo_speculant_app_chart {
		
		@ $mol_mem_key
		indicator( id : string ) {
			return this.model().indicators()[ id ]
		}

		@ $mol_mem_key
		linear_title( id : string ) {
			return this.indicator( id ).name
		}	
		
		@ $mol_mem_key
		linear_series( id : string ) {
			return [ 1, 2, 3, 4, 5, 6 ]
			// return this.indicator( id ).history
		}
		
		@ $mol_mem
		linear_list() {
			const key_list = [ 'KBK' , 'BRT' , 'RIK' ]
			return [
				... key_list.map( id => this.Linear( id ) ) ,
				... super.linear_list() ,
			]
		}

	}

}
