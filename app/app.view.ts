namespace $.$$ {

	export class $hyoo_speculant_app extends $.$hyoo_speculant_app {

		@ $mol_mem
		news() {
			return this.$.$mol_state_arg.value( 'news' ) !== null
		}

		pages() {
			return [
				this.Page_chart() ,
				... ( this.news() ? [ this.Page_news() ]  : [] ) ,
			]
		}

	}

}
