const	promise1	=	new	Promise((resolve,	reject)	=>	{				
    resolve(123); 
}); 
promise1.then((res)	=>	{				
    console.log('I	get	called:',	res	===	123);	//	Devuelve:	true 
}); 
promise1.catch((err)	=>	{				
    //	Nuca	es	utilizado 
})

const	promise2	=	new	Promise((resolve,	reject)	=>	{				
    reject(new	Error("Algo	malo	a	pasado")); 
}); 
promise2.then((res)	=>	{				
    //	This	is	never	called 
}); 
promise2.catch((err)	=>	{				
    console.log('Tengo	una	llamada:	',	err.message);	
    //	Tengo	una	llamada:	'Algo	malo	a	pasado' 
})

Promise.resolve(123)				
    .then((res)	=>	{								
        console.log(res);	//	123								
        return	456;				
    })				
    .then((res)	=>	{								
        console.log(res);	//	456								
        return	Promise.resolve(123);				
    })				
    .then((res)	=>	{								
        console.log(res);	
        //	123	:	Notice	that	this	`this`	is	called	with	the	resolved	value								
        return	Promise.resolve(123);				
    })

Promise.reject(new	Error('something	bad	happened'))				
    .then((res)	=>	{								
        console.log(res);	//	not	called								
        return	456;				
    })				
    .then((res)	=>	{								
        console.log(res);	//	not	called								
        return	Promise.resolve(123);				
    })				
    .then((res)	=>	{								
        console.log(res);	//	not	called								
        return	Promise.resolve(123);				
    })				
    .catch((err)	=>	{								
        console.log(err.message);	//	something	bad	happened												
    });

Promise.reject(new	Error('something	bad	happened'))				
    .then((res)	=>	{								
        console.log(res);	//	not	called								
        return	456;				
    })				
    .catch((err)	=>	{								
        console.log(err.message);	//	something	bad	happened								
        return	Promise.resolve(123);				
    })				
    .then((res)	=>	{								
        console.log(res);	//	123				
    })

Promise.resolve(123)				
    .then((res)	=>	{								
        throw	new	Error('something	bad	happened')								
        return	456;				
    })				
    .then((res)	=>	{								
        console.log(res);	//	never	called								
        return	Promise.resolve(789);				
    })				
    .catch((err)	=>	{								
        console.log(err.message);	//	something	bad	happened				
    })

function	iReturnPromiseAfter1Second():Promise<string>	{				
    return	new	Promise((resolve)=>{								
        setTimeout(()=>resolve("Hello	world!"),	1000);				
    }); 
}
Promise.resolve(123)				
    .then((res)=>{									
        //	res	is	inferred	to	be	of	type	`number`									
        return	iReturnPromiseAfter1Second();				
    })				
    .then((res)	=>	{								
        //	res	is	inferred	to	be	of	type	`string`								
        console.log(res);	//	Hello	world!				
    });

//	good	json	file 
loadJSONAsync('good.json')				
    .then(function	(val)	{	console.log(val);	})				
    .catch(function	(err)	{								
        console.log('good.json	error',	err.message);	//	never	called				
    })
//	non-existent	json	file				
    .then(function	()	{								
        return	loadJSONAsync('absent.json');				
    })				
    .then(function	(val)	{	console.log(val);	})	//	never	called				
    .catch(function	(err)	{								
        console.log('absent.json	error',	err.message);				
    })
//	invalid	json	file				
    .then(function	()	{								
        return	loadJSONAsync('bad.json');				
    })				
    .then(function	(val)	{	console.log(val);	})	//	never	called				
    .catch(function	(err)	{								
        console.log('bad.json	error',	err.message);				
    });

//--------	main.ts	--------
//	Una	función	asincróna	simulando	la	petición	desde	el	servidor 
function	loadItem(id:	number):	Promise<{id:	number}>	{				
    return	new	Promise((resolve)=>{								
        console.log('loading	item',	id);								
        setTimeout(()	=>	{	//	simulate	a	server	delay												
            resolve({	id:	id	});								
        },	1000);								
    }); 
}
//	Cadena	(serie) 
let	item1,	item2; 
loadItem(1)				
    .then((res)	=>	{								
        item1	=	res;								
        return	loadItem(2);				
    })				
    .then((res)	=>	{								
        item2	=	res;								
        console.log('done');				
    });	//	overall	time	will	be	around	2s
//	Paralelo 
Promise.all([loadItem(1),loadItem(2)])				
    .then((res)	=>	{								
        [item1,item2]	=	res;								
        console.log('done')								
    });	//	overall	time	will	be	around	1s
