namespace $.$$ {
	
	const { rem, per, px } = $mol_style_unit

	$mol_style_define( $hyoo_speculant_app_dashboard , {

		flex: {
			basis: rem(30),
		},

		Head: {
			justifyContent: 'space-between' ,
		} ,
		
		Title_list: {
			padding: $mol_gap.block,
			justifyContent: 'space-between',
		} ,
		
		Rate: {
			padding: $mol_gap.text ,
			flex: {
				grow: 1,
				basis: rem(3),
			},
			justifyContent: 'flex-end',
			wordBreak: 'keep-all',
		} ,
		
		Currency_name: {
			padding: $mol_gap.text ,
			flex: {
				grow: 1,
				basis: rem(8),
			},
		} ,

		Balance_currency: {
			padding: $mol_gap.text ,
		} ,
		
		Foot_list: {
			padding: $mol_gap.block,
			flex: {
				grow: 1,
			},
		} ,
		
		Icon_currency_up: {
			color: 'green' ,
		} ,

		Icon_currency_down: {
			color: 'red' ,
		} ,
		
		Currency_icon: {
			width: px(16) ,
			height: px(16) ,
			alignSelf: 'center' ,
			margin: {
				right: rem(.25) ,
			} ,
		} ,
		
	} )

}
