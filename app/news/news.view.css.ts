namespace $.$$ {
	
	const { rem , em } = $mol_style_unit

	$mol_style_define( $hyoo_speculant_app_news , {

		List: {
			padding: $mol_gap.block,
		},

	} )
	
	$mol_style_define( $hyoo_speculant_app_news_item , {

		Date: {
			justifyContent: 'flex-end' ,
			font: {
				size: em(0.9) ,
			} ,
		} ,

		News_item_title: {
			Row: {
				margin: {
					bottom: 0 ,
				},
			},
			Header: {
				font: {
					size: em(1.3),
				},
				padding: {
					bottom: 0,
				},
			},
		}

	} )

}
