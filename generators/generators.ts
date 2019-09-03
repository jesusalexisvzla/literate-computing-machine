function*	infiniteSequence()	{				
    var	i	=	0;				
    while(true)	{								
        yield	i++;				
    } 
}
var	iterator1	=	infiniteSequence(); while	(true)	{				
    console.log(iterator1.next());	//	{	value:	xxxx,	done:	false	}	para	siempre 
}

function*	idMaker()	{				
    let	index	=	0;				
    while	(index	<	3)								
    yield	index++; 
} 
let	gen	=	idMaker(); 
console.log(gen.next());	//	{	value:	0,	done:	false	} 
console.log(gen.next());	//	{	value:	1,	done:	false	} 
console.log(gen.next());	//	{	value:	2,	done:	false	} 
console.log(gen.next());	//	{	value:	undefined,	done:	true	} 
//	Accede a la	variable porque	se	le	ha	dicho	apesar	de	que	el	'yield'	no	ha	sido efectuado.

//------	main.ts	-------
function*	generator(){				
    console.log('Execution	started');				
    yield	0;				
    console.log('Execution	resumed');				
    yield	1;				
    console.log('Execution	resumed'); 
}
var	iterator2	=	generator(); 
console.log('Starting	iteration');	
//	Esto	se	ejecutará	antes	que	nada	de	dentro	del	m étodo	generator() 
console.log(iterator2.next());	//	{	value:	0,	done:	false	} 
console.log(iterator2.next());	//	{	value:	1,	done:	false	} 
console.log(iterator2.next());	//	{	value:	undefined,	done:	true	}

//	-------	ejemplo.js	---------
function*	generator2()	{				
    var	bar	=	yield	'Console	log';				
    console.log(bar);	
    //	'Un	testo	inyectado'	->	asignado	por	nextThing	=	iterator.nex t('bar')				
    yield	1; 
} 
const	iterator3	=	generator2(); 
//	Start	execution	till	we	get	first	yield	value 
const	foo1	=	iterator3.next(); 
console.log(foo1.value);	//	Console	log 
//	Resume	execution	injecting	bar 
const	nextThing	=	iterator3.next('Un	texto	inyectado');	
//	Aqui	se	le	asigna	el	value	al	foo.value 
console.log(nextThing);

function*	logGenerator()	{		
    console.log(yield);		
    console.log(yield);		
    console.log(yield); 
}
var	gen2	=	logGenerator();
//	the	first	call	of	next	executes	from	the	start	of	the	function 
//	until	the	first	yield	statement 
gen2.next();	
gen2.next('pretzel');	//	pretzel 
gen2.next('california');	//	california 
gen2.next('mayonnaise');	//	mayonnaise

//	---------	test.ts	-----
function*	generator3()	{				
    try	{								
        yield	'foo';								
        throw	Error("Test");				
    }				
    catch(err)	{								
        console.log(err.message);	//	bar!				
    } 
}
var	iterator4	=	generator3(); 
//	Start	execution	till	we	get	first	yield	value 
var	foo2	=	iterator4.next(); 
console.log(foo2.value); 
//	como	está	comentado	la	excepción	no	se	ejuta	ya	que	no	hay	un	'next()' 
//var	foo	=	iterator.next();

//	---------	test.ts	-----
function*	generator4()	{				
    try	{								
        yield	'foo';								
        throw	Error("Test");				
    }				
    catch(err)	{								
        console.log(err.message);	//	bar!				
    } 
}
var	iterator5	=	generator4(); 
//	Start	execution	till	we	get	first	yield	value 
var	foo3	=	iterator5.next(); 
console.log(foo3.value); 
var	foo3	=	iterator5.next();

function	getFirstName()	{				
    setTimeout(function(){								
        gen.next('alex')				
    },	1000); 
}
function	getSecondName()	{				
    setTimeout(function(){								
        gen.next('perry')				
    },	1000); 
}
function	*sayHello()	{				
    var	a	=	yield	getFirstName();				
    var	b	=	yield	getSecondName();				
    console.log(a,	b);	//alex	perry 
}
var	gen	=	sayHello();
gen.next();