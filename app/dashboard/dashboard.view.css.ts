namespace $.$$ {
	
	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_speculant_app_dashboard , {

		flex: {
			basis: rem(30),
		},

		Balance_total: {
			marginRight: '1rem',
		} ,

		Head: {
			justifyContent: 'space-between' ,
		} ,
		
		Rate: {
			padding: $mol_gap.text ,
			flex: {
				grow: 1,
				basis: rem(3),
			},
		} ,
		
		Currency_list: {
			padding: $mol_gap.block ,
		} ,
		
		Currency_name: {
			padding: $mol_gap.text ,
			flex: {
				grow: 1,
				basis: rem(10),
			},
		} ,

		Balance_currency: {
			padding: $mol_gap.text ,
		} ,

	} )

}
