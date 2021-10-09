namespace $.$$ {

	export class $hyoo_speculant_app_news extends $.$hyoo_speculant_app_news {

		@ $mol_mem
		news_list() {
			return this.model().news().map( news => this.News_item( news ) )
		}
		
		@ $mol_mem_key
		news_item_title( news_item: any ) {
			return news_item.title
		}
		
		@ $mol_mem_key
		news_item_body( news_item: any ) {
			console.log( { news_item } )
			return news_item.body
		}

	}

}