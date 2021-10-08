namespace $.$$ {
	export class $hyoo_speculant_world extends $.$hyoo_speculant_world {
		
		@ $mol_mem
		time( reset?: boolean ): $mol_time_moment {
			
			this.$.$mol_state_time.now( 1000 )
			
			const prev = $mol_mem_cached( ()=> this.time() )
			if( !prev ) return new $mol_time_moment().mask( '0000-00-00' )
			
			return prev.shift({ day: +1 })
		}
		
	}
}
