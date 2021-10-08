namespace $.$$ {
	
	export type $hyoo_speculant_world_indicator = {
		name: string
		type: string
		current: number
		history: readonly number[]
	}
	
	export class $hyoo_speculant_world extends $.$hyoo_speculant_world {
		
		@ $mol_mem
		time( next?: 'next' ): $mol_time_moment {
			
			this.$.$mol_state_time.now( 1000 )
			
			const prev = $mol_mem_cached( ()=> this.time() )
			if( !prev ) return new $mol_time_moment().mask( '0000-00-00' )
			
			return prev.shift({ day: +1 })
		}
		
		@ $mol_mem
		indicators(): Record< 'CSH'|'KBK'|'BRT'|'RIK', $hyoo_speculant_world_indicator > {
			
			this.time()
			
			const prev = $mol_mem_cached( ()=> this.indicators() ) ?? super.indicators()
			
			for( const code in prev ) {
				
				if( code === 'CSH' ) continue
				
				const current = prev[ code ].current + Math.floor( Math.random() * 2 - 1 )
				const history = [ ... prev[ code ].history, current ]
				
				prev[ code ] = {
					... prev[ code ],
					current,
					history,
				}
				
			}
			
			return { ... prev }
		}
		
	}
}
