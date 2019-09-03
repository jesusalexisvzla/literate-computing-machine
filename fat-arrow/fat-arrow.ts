var	inc	=	(x)=>x+1;

function	Person1(age)	{		
    this.age	=	age		
    //	ejecutandola	en	el	navegador	el	this	es	window		
    //	ya	que	es	quien	hace	la	llamada		
    this.growOld	=	function()	{				
        this.age++;		
    } 
} 

var	perso1n	=	new	Person1(1); 
setTimeout(person.growOld,1000);	//	debería	incrementar	1	+	1	=	2 
setTimeout(function()	{	console.log(person.age);	},2000);	//	Devuelve	1,	debería	ser	2

function	Person2(age)	{		
    this.age	=	age		
    //	aquí	el	this	es	el	objeto	y	no	quien	hace	la	llamada		
    this.growOld	=	()	=>	{						
        this.age++;		
    } 
}

var	person2	=	new	Person2(1); 
setTimeout(person.growOld,1000); 
setTimeout(function()	{	console.log(person.age);	},2000);	//	devuelve	2

class	Person	{		
    constructor(public	age:number)	{}		
    growOld	=	()	=>	{						
        this.age++;		
    } 
} 

var	person	=	new	Person(1); 
setTimeout(person.growOld,1000); 
setTimeout(function()	{	console.log(person.age);	},2000);	//	2

//	Se	iguala	la	función	de	la	clase	a	una	variable	de	otra	clase 
var	growOld	=	person.growOld;
 //	más	adelante se	llama 
 growOld();

let	_self	=	this; 
something.each(function()	{				
    console.log(_self);	//	the	lexically	scoped	value				
    console.log(this);	//	the	library	passed	value 
});

class	Adder	{				
    //	This	function	is	now	safe	to	pass	around				
    add	=	(b:	string):	string	=>	{								
        return	this.a	+	b;				
    } 
} class	ExtendedAdder	extends	Adder	{				
    //	Create	a	copy	of	parent	before	creating	our	own				
    private	superAdd	=	this.add;				
    //	Now	create	our	override				
    add	=	(b:	string):	string	=>	{								
        return	this.superAdd(b);				
    } 
}

//	A	curried	function 
let	add	=	(x:	number)	=>	(y:	number)	=>	x	+	y;
//	Simple	usage 
add(123)(456);
//	partially	applied 
let	add123	=	add(123);
//	fully	apply	the	function 
add123(456);
