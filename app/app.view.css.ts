namespace $.$$ {

	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_speculant_app , {

		Page_profile: {
			flex: {
				basis: rem(30),
			},
		} ,
		
		Page_profile_content: {
			padding: $mol_gap.block ,
		} ,
		
		Page_final: {
			flex: {
				basis: rem(30),
			},
			
			Foot: {
				justifyContent: 'center',
			}
		} ,
		
		Page_final_content: {
			padding: $mol_gap.block ,
		} ,
		
		Portfolio_item: {
			flex: {
				grow: 1,
				shrink: 1,
				basis: rem(7),
			},
			Label: {
				wordBreak: 'keep-all',
			}
		},
		
	} )

}
