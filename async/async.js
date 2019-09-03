//	-----------	test.ts	----------
//	No	es	código	de	verdad	solamente	es	la	prueba	de	concepto 
/*
async function foo()	{
    try	{
        var	val	=	await	getMeAPromise();
        console.log(val);
    }
    catch(err)	{
        console.log('Error:	',	err.message);
    }
}
*/
//	No	olvideís	que	al	no	tener	la	función	que	genera	las	peticiones 
//	Este	código	no	funciona
/*
var	__awaiter	=	(this	&&	this.__awaiter)	||	function	(thisArg,	_arguments,	P,	generator )	{
    return	new	(P	||	(P	=	Promise))(function	(resolve,	reject)	{
        function	fulfilled(value)	{	try	{	step(generator.next(value));	}	catch	(e)	{	r eject(e);	}	}
        function	rejected(value)	{	try	{	step(generator.throw(value));	}	catch	(e)	{	r eject(e);	}	}
        function	step(result)	{	result.done	?	resolve(result.value)	:	new	P(function	( resolve)	{	resolve(result.value);	}).then(fulfilled,	rejected);	}
        step((generator	=	generator.apply(thisArg,	_arguments)).next());
    });
}; //	No	es	código	de	verdad	solamente	es	la	prueba	de	concepto
*/
/*
function	foo()	{
    return	__awaiter(this,	void	0,	void	0,	function*	()	{
        try	{
            var	val	=	yield	getMeAPromise();
            console.log(val);
        }
        catch	(err)	{
            console.log('Error:	',	err.message);
        }
    });
}
*/ 
