namespace $.$$ {

	export class $hyoo_speculant_app extends $.$hyoo_speculant_app {
		
		@ $mol_mem
		profile( id: string ) {
			return this.model().profiles()[ id ]
		}

		pages() {
			if ( !this.user_profile() ) {
				return [ this.Page_profile() ]
			}

			return [
				this.Page_dashboard() ,
				... this.chat_pages(),
			]
		}
		
		@ $mol_mem
		profile_buttons() {
			return Object.keys( this.model().profiles() ).map( id => this.Profile_button( id ) )
		}
		
		@ $mol_mem_key
		profile_title( id: string ) {
			return this.profile( id ).title
		}
		
		profile_select( id : string ) {
			this.user_profile( id )
		} 
		
		@ $mol_mem
		page_profile_body() {
			return [
				this.Description() ,
				this.Select_profile() ,
				... this.profile_buttons() ,
			]
		}

	}

}
