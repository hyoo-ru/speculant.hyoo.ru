namespace $.$$ {
	$mol_test({
		
		'timer'( $ ) {
			
			const world = new $hyoo_speculant_world
			$mol_assert_equal( world.time().toString(), new $mol_time_moment().toString( 'YYYY-MM-DD' ) )
			
			world.time( !!'next' )
			$mol_assert_unique( world.time().toString(), new $mol_time_moment().toString( 'YYYY-MM-DD' ) )
			
		}
		
	})
}
