// setTimeOut(function(){
// 	console.log(this);	//	Elemento	Que	llama	a	la	función
// },	2000);

// setTimeOut(()	=>	{
//	console.log(this);//	Elemento	que	contiene	esta	función
// },2000);

function	padLeft(value:	string,	padding:	string	|	number)	{
	if(typeof	padding	===	"number"){																	
        return	Array(padding	+	1).join("	")	+	value;													
    }
	if(typeof	padding	===	"string"){																	
        return	Array(padding.length	+	1).join("	")	+	value;													
    }
    throw	new	Error(`Expected	String	or	number,	got	'${padding}'	`);
}
console.log(padLeft("hello",	"aaa"));	//	Ejemplo	de	función	con	texto	->	Funciona
console.log(padLeft("hello",	5));	//	Ejemplo	de	función	con	número	->	Funciona				
//console.log(padLeft("hello",	true));	//	Ejemplo	de	función	con	texto	->	NO	FUNCION A	(no	compila)

// function	validateEntity(e:	Entity?)	{
    //	Throw	exception	if	e	is	null	or	invalid	entity 
// }
// function	processEntity(e:	Entity?)	{
//	validateEntity(e);				let	s	=	e!.name;		//	Assert	that	e	is	non-null	and	access	name 
// }
