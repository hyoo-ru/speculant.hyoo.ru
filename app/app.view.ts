namespace $.$$ {

	export class $hyoo_speculant_app extends $.$hyoo_speculant_app {

		pages() {
			return [
				this.Page_dashboard() ,
				... this.chat_pages(),
			]
		}

	}

}
