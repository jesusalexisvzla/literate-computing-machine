@miDecorador
function	log(constructor:	Function):	void{				
    console.log('Registered	Class:	'+	constructor['name']	+	'	at	'	+	Date.now()); 
}
function	logm<T>(target:	Object,	propertyKey:	string	|	symbol,	descriptor:	TypedProper tyDescriptor<T>):	void	{				
    console.log('Registered	Method:	'	+	propertyKey.toString()	+	'	at	'	+	Date.now()); 
}
function	logparam	(target:	Object,	propertyKey:	string	|	symbol,	parameterIndex:	number ):	void	{				
    console.log('Registered	Parameter:	'	+	propertyKey.toString()	+	'	-	'	+	parameterI ndex	+	'	at	'	+	Date.now()); 
} //	Así	se	utiliza	un	decorador 
@log 
class	MyClass	{
	public	name:	string	=	'name';
	constructor()	{								
        console.log('constructor');				
    }
	@logm				
    public	myMethod()	{								
        console.log('method')				
    }
	@logm				
    public	myMethod2(param1:	number,	@logparam	param2:	boolean)	{								
        console.log('method2')				
    } 
}
var	myClass	=	new	MyClass(); 
myClass.myMethod(); 
myClass.myMethod2(1,	false);