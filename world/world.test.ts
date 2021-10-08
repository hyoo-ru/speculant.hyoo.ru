namespace $.$$ {
	$mol_test({
		
		'timer'( $ ) {
			
			const world = new $hyoo_speculant_world
			$mol_assert_equal( world.time().toString(), new $mol_time_moment().toString( 'YYYY-MM-DD' ) )
			
			world.time( 'next' )
			$mol_assert_unique( world.time().toString(), new $mol_time_moment().toString( 'YYYY-MM-DD' ) )
			
			world.destructor()
		},
		
		'indicators'( $ ) {
			
			const world = new $hyoo_speculant_world
			$mol_assert_equal( world.indicators().CSH.current, 1 )
			$mol_assert_equal( world.indicators().KBK.history.length, 1 )
			
			world.time( 'next' )
			$mol_assert_equal( world.indicators().CSH.current, 1 )
			$mol_assert_equal( world.indicators().KBK.history.length, 2 )
			$mol_assert_equal( world.indicators().KBK.history.slice(-1)[0], world.indicators().KBK.current )
			
			world.destructor()
		},
		
	})
}
