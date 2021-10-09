namespace $.$$ {
	
	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_speculant_app_dashboard , {
		
		flex: {
			basis: rem(30),
		},

		Balance_total: {
			fontWeight: 'bold' ,
		} ,

		Head: {
			justifyContent: 'space-between' ,
		} ,
		
		Chart: {
			Legend: {

				Graph_sample_box: {
					padding: $mol_gap.text ,
				} ,

				Graph_title: {
					padding: $mol_gap.text ,
				} ,
				
			} ,
		} ,
		
		Rate: {
			padding: $mol_gap.text ,
		} ,

		Balance_currency: {
			padding: $mol_gap.text ,
		} ,

	} )

}
