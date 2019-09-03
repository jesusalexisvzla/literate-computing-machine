function	echo1<T>(arg:	T)	:	T	{
    return	arg; 
    }
let	a1	=	echo1<number>(1);	//	El	typeof	es	Number 
let	b1	=	echo1<String>("Hola	mundo");	//	El	typeof	es	String

class	Generic<T>	{
	add:	(X:	T,	y:T)	=>	T; 
}
let	myGeneric	=	new	Generic<number>();

console.log(myGeneric.add	=	function	(x,y)	{return	x	+	y}); 
console.log(myGeneric.add(3,4));

interface	withLength	{
    length:	number; 
}
//	El	parametro	hereda	de	la	interfaz	la	cual	fuerza	al	parametro	tenga	el	método	leng th 
function	echo2<T	extends	withLength>(arg:	T):	T	{
    console.log(arg.length);					
    return	arg; 
}
//	Esto	funcionará 
let	a2	=	echo2("aaa"); 
let	t	=	echo2({length:	2,	name:	"aa"});
//	Esto	NO	funcionará 
//let	b2	=	echo2(1);

function	copyFields<T	extends	U,	U>(source:	T,	target:	U)	:	U	{
    for(let	id	in	source){
        if(target[id]	!=	undefined){
            source[id]	=	target[id];
        }else	{
            target[id]	=	source[id];
        }
    }
    return	target; 
}
let	a	=	{a:	1,	b:	2,	c:	3};
let	b	=	copyFields	(a,	{b:	10,	c:20});	//	Esto	funcionará 
let	c	=	copyFields	(a,	{Q:	20});	//	Esto	NO	funcionará
console.log(b);	//	1,	10,	20 
console.log(c);	//	Lo	devuelve	si	lo	compilas	a	pesar	de	saber	que	está	mal
