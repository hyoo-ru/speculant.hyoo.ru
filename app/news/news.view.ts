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
		read_count( next? : number ) {
			return next ?? 0
		}
		
		read() {
			this.read_count( this.model().news().length )
		}
		
		auto() {
			$mol_fiber_defer( () => {
				this.read()
			} )
		}
		
	}
	
	export class $hyoo_speculant_app_news_item extends $.$hyoo_speculant_app_news_item {
		
		@ $mol_mem
		current() {
			return this.news_item() as any
		}

		@ $mol_mem_key
		text() {
			return this.current().text
		}
		
		@ $mol_mem_key
		date() {
			return this.current().moment.toString( 'DD Mon YYYY' )
		}
		
	}

}
