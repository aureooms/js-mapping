

export function insort_right ( a , x , lo = 0 , hi = a.length ) {

	const pos = bisect_right( a , x , lo , hi ) ;

	a.splice( pos , 0 , x ) ;

}
