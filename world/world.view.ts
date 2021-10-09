namespace $.$$ {
	
	export type $hyoo_speculant_world_indicator_codes = keyof ReturnType< $.$hyoo_speculant_world['indicators'] >
	
	export type $hyoo_speculant_world_indicator = {
		name: string
		icon: string
		type: string
		have: number
		current: number
		diff: number
		trend: number
		history: readonly number[]
	}
	
	export type $hyoo_speculant_world_indicators = Record<
	$hyoo_speculant_world_indicator_codes,
	$hyoo_speculant_world_indicator
	>
	
	export type $hyoo_speculant_world_news = ReturnType< $.$hyoo_speculant_world['news'] >
	
	export class $hyoo_speculant_world extends $.$hyoo_speculant_world {
		
		@ $mol_mem
		time( next?: $mol_time_moment ): $mol_time_moment {
			
			if( next ) return next
			
			this.$.$mol_state_time.now( 1000 )
			
			const prev = $mol_mem_cached( ()=> this.time() )
			if( !prev ) return new $mol_time_moment().mask( '0000-00-00' )
			
			return prev.shift({ day: +1 })
		}
		
		@ $mol_mem
		indicators( next?: $hyoo_speculant_world_indicators ): $hyoo_speculant_world_indicators {
			
			this.time()
			
			if( next ) return next
			
			const prev = $mol_mem_cached( ()=> this.indicators() ) ?? super.indicators()
			next = { ... prev }
			
			for( const code in next ) {
				
				if( code === 'CSH' ) continue
				
				const type = next[ code ].type
				
				const entropy = this.entropy()[ type ]
				if( entropy === undefined ) $mol_fail( new RangeError( `No entropy for ${ type }` ) )
				
				const current = Math.max( 0,
					+ next[ code ].current
					+ Math.round(
						+ next[ code ].trend
						+ ( Math.random() * 2 - 1 ) * entropy
					)
				)
				
				const diff = current - next[ code ].current
				
				const history = [ ... next[ code ].history, current ]
				
				next[ code ] = {
					... next[ code ],
					current,
					diff,
					history,
				}
				
			}
			
			return next
		}
		
		exchange( code: $hyoo_speculant_world_indicator_codes, diff: number ) {
			
			const indicators = this.indicators()
			
			if( diff < -indicators[ code ].have ) $mol_fail( new RangeError( `Required at least ${ -diff } ${ code }` ) )
			
			const cost = indicators[ code ].current * diff
			if( cost > indicators.CSH.have ) $mol_fail( new RangeError( `Required at least ${ cost } CSH` ) )
			
			const next = { ... indicators }
			
			next[ code ] = {
				... next[ code ],
				have: next[ code ].have + diff
			}
			
			next.CSH = {
				... next.CSH,
				have: next.CSH.have - cost
			}
			
			this.indicators( next )
			
			return null
		}
		
		@ $mol_mem
		news(): $hyoo_speculant_world_news {
			
			const moment = this.time()
			const indicators = this.indicators()
			
			const prev = $mol_mem_cached( ()=> this.news() ) ?? super.news()
			if( Math.random() > .1 ) return prev
			
			const template = $mol_stub_select_random( this.news_templates() )
			const indicator = $mol_stub_select_random(
				this.profiles()[ this.profile() ].indicators as readonly string[]
			)
			
			const name = indicators[ indicator ].name
			
			return [
				... prev, {
					moment: moment.toString( 'YYYY-MM-DD' ),
					text: template.text.replace( '{name}', name ),
				},
			]
			
		}
		
		@ $mol_mem
		time_end() {
			return new $mol_time_moment().shift({ year: 1 }).mask( '0000-00-00' )
		}
		
		@ $mol_mem
		age( next?: string ): string {
			if( next ) return next
			
			if( this.time().toString() >= this.time_end().toString() ) return 'finish'
			
			return $mol_mem_cached( ()=> this.age() ) ?? super.age()
		}
		
	}
}
