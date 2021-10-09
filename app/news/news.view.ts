namespace $.$$ {

	export class $hyoo_speculant_app_news extends $.$hyoo_speculant_app_news {

		@ $mol_mem
		news_list() {
			return this.model().news().map( news => this.News_item( news ) ).reverse()
		}		
		
		@ $mol_mem_key
		news_item( item: any ) {
			return item
		}
		
		@ $mol_mem_key
		news_read( news_item: any , read?: boolean ) {
			return read ?? false
		}
		
		@ $mol_mem
		unread_count() {
			const count = this.news_list().reduce( ( sum , news_item ) => {
				const read = Number( !this.news_read( news_item ) )
				return sum + read
			} , 10 )
			return count
		}
		
	}
	
	export class $hyoo_speculant_app_news_item extends $.$hyoo_speculant_app_news_item {
		
		@ $mol_mem
		current() {
			return this.news_item() as any
		}

		@ $mol_mem_key
		news_item_title() {
			return this.current().title
		}
		
		@ $mol_mem_key
		news_item_body() {
			return this.current().body
		}
		
		@ $mol_mem_key
		news_item_date() {
			return this.current().moment
		}
		
		@ $mol_mem
		read() {
			this.news_read( true )
		}
		
		auto() {
			// this.read() // bug
		}
	}

}
