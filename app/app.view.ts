namespace $.$$ {

	export class $hyoo_speculant_app extends $.$hyoo_speculant_app {
		
		@ $mol_mem
		profile( id: string ) {
			return this.model().profiles()[ id ]
		}
		
		select_profile( next?: string ) {
			this.model().profile( next )
		}
		
		profile_dict() {
			return Object.keys( this.model().profiles() ).reduce( ( dict , id ) => {
				const profile = this.profile( id )
				dict[id] = profile.title
				return dict
			} , {} )
		}

		pages() {
			// return [ this.Page_final() ]
			return [
				... ( this.model().profile() === 'other' ? [ this.Page_profile() ] : [ this.Page_dashboard() ] ) ,
				... this.chat_pages(),
			]
		}
		
	}

}
