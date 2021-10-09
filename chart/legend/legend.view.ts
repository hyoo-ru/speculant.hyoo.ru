namespace $.$$ {

	export class $hyoo_speculant_chart_legend extends $.$hyoo_speculant_chart_legend {

		rows( id : any ) {
			return [
				this.Graph_sample_box( id ) ,
				this.Graph_title( id ) ,
				... this.Tools( id ) ,
			]
		}

	}

}
