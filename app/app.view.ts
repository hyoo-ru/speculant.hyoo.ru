namespace $.$$ {

	export class $hyoo_speculant_app extends $.$hyoo_speculant_app {

		@ $mol_mem
		news() {
			return this.$.$mol_state_arg.value( 'news' ) !== null
		}

		pages() {
			return [
				this.Page_dashboard() ,
				... ( this.news() ? [ this.Page_news() ]  : [] ) ,
			]
		}

		@ $mol_mem
		news_open_sub() {
			return this.unread_count() === 0
				? [ this.News_open_icon() ]
				: [ this.News_unread_count() , this.News_open_icon() ]
		}
		
		@ $mol_mem
		unread_count() {
			this.$.$mol_state_time.now( 1000 )
			return this.model().news().length - this.read_count()
		}

	}

}
