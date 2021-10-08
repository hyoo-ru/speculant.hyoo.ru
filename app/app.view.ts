namespace $.$$ {

	export class $hyoo_speculant_app extends $.$hyoo_speculant_app {

		@ $mol_mem
		page() {
			return this.$.$mol_state_arg.value( 'page' ) || 'chart'
		}

		body() {
			return [ this.page_dict()[ this.page() ] ]
		}

	}

}
