// setTimeOut(function(){
// 	console.log(this);	//	Elemento	Que	llama	a	la	función
// },	2000);
// setTimeOut(()	=>	{
//	console.log(this);//	Elemento	que	contiene	esta	función
// },2000);
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("	") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join("	") + value;
    }
    throw new Error("Expected\tString\tor\tnumber,\tgot\t'" + padding + "'\t");
}
console.log(padLeft("hello", "aaa")); //	Ejemplo	de	función	con	texto	->	Funciona
console.log(padLeft("hello", 5)); //	Ejemplo	de	función	con	número	->	Funciona				
//console.log(padLeft("hello",	true));	//	Ejemplo	de	función	con	texto	->	NO	FUNCION A	(no	compila)
