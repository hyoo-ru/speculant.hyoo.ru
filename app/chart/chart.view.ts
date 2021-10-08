namespace $.$$ {

	export class $hyoo_speculant_app_chart extends $.$hyoo_speculant_app_chart {
		
		@ $mol_mem_key
		indicator( id : string ) {
			return this.model().indicators()[ id ]
		}

		@ $mol_mem_key
		linear_title( id : string ) {
			return 'title'
		}	
		
		@ $mol_mem_key
		linear_series( id : string ) {
			return [ 10, 20, 30, 40 ]
		}
		
		@ $mol_mem
		linear_list() {
			const key_list = Object.keys( this.model().indicators() )
			return [
				... key_list.map( id => this.Linear( id ) ) ,
				... super.linear_list() ,
			]
		}

	}

}
