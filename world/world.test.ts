namespace $.$$ {
	$mol_test({
		
		'timer'( $ ) {
			
			const world = new $hyoo_speculant_world
			$mol_assert_equal( world.time().toString(), new $mol_time_moment().toString( 'YYYY-MM-DD' ) )
			
			world.time( null as any )
			$mol_assert_unique( world.time().toString(), new $mol_time_moment().toString( 'YYYY-MM-DD' ) )
			
			world.destructor()
		},
		
		'indicators'( $ ) {
			
			const world = new $hyoo_speculant_world
			$mol_assert_equal( world.indicators().CSH.current, 1 )
			$mol_assert_equal( world.indicators().KBK.history.length, 1 )
			const kbk = world.indicators().KBK.current
			
			world.time( null as any )
			$mol_assert_equal( world.indicators().CSH.current, 1 )
			$mol_assert_equal( world.indicators().KBK.history.length, 2 )
			$mol_assert_equal( world.indicators().KBK.history.slice(-1)[0], world.indicators().KBK.current )
			$mol_assert_equal( world.indicators().KBK.diff, world.indicators().KBK.current - kbk )
			
			world.destructor()
		},
		
		'exchange'( $ ) {
			
			const world = new $hyoo_speculant_world
			const csh = world.indicators().CSH.have
			
			$mol_assert_equal( world.indicators().VBL.have, 0 )
			
			$mol_assert_fail(
				()=> world.exchange( 'VBL', -2 ),
				'Required at least 2 VBL',
			)
			
			$mol_assert_fail(
				()=> world.exchange( 'VBL', +100500 ),
				`Required at least ${ world.indicators().VBL.current * 100500 } CSH`,
			)
			
			world.exchange( 'VBL', +2 )
			$mol_assert_equal( world.indicators().VBL.have, 2 )
			$mol_assert_equal( world.indicators().CSH.have, csh - world.indicators().VBL.current * 2 )
			
			world.exchange( 'VBL', -2 )
			$mol_assert_equal( world.indicators().VBL.have, 0 )
			$mol_assert_equal( world.indicators().CSH.have, csh )
			
			world.destructor()
		},
		
	})
}
