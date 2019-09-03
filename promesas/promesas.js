var promise1 = new Promise(function (resolve, reject) {
    resolve(123);
});
promise1.then(function (res) {
    console.log('I	get	called:', res === 123); //	Devuelve:	true 
});
promise1["catch"](function (err) {
    //	Nuca	es	utilizado 
});
var promise2 = new Promise(function (resolve, reject) {
    reject(new Error("Algo	malo	a	pasado"));
});
promise2.then(function (res) {
    //	This	is	never	called 
});
promise2["catch"](function (err) {
    console.log('Tengo	una	llamada:	', err.message);
    //	Tengo	una	llamada:	'Algo	malo	a	pasado' 
});
Promise.resolve(123)
    .then(function (res) {
    console.log(res); //	123								
    return 456;
})
    .then(function (res) {
    console.log(res); //	456								
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    //	123	:	Notice	that	this	`this`	is	called	with	the	resolved	value								
    return Promise.resolve(123);
});
Promise.reject(new Error('something	bad	happened'))
    .then(function (res) {
    console.log(res); //	not	called								
    return 456;
})
    .then(function (res) {
    console.log(res); //	not	called								
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); //	not	called								
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message); //	something	bad	happened												
});
Promise.reject(new Error('something	bad	happened'))
    .then(function (res) {
    console.log(res); //	not	called								
    return 456;
})["catch"](function (err) {
    console.log(err.message); //	something	bad	happened								
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); //	123				
});
Promise.resolve(123)
    .then(function (res) {
    throw new Error('something	bad	happened');
    return 456;
})
    .then(function (res) {
    console.log(res); //	never	called								
    return Promise.resolve(789);
})["catch"](function (err) {
    console.log(err.message); //	something	bad	happened				
});
function iReturnPromiseAfter1Second() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Hello	world!"); }, 1000);
    });
}
Promise.resolve(123)
    .then(function (res) {
    //	res	is	inferred	to	be	of	type	`number`									
    return iReturnPromiseAfter1Second();
})
    .then(function (res) {
    //	res	is	inferred	to	be	of	type	`string`								
    console.log(res); //	Hello	world!				
});
//	good	json	file 
loadJSONAsync('good.json')
    .then(function (val) { console.log(val); })["catch"](function (err) {
    console.log('good.json	error', err.message); //	never	called				
})
    //	non-existent	json	file				
    .then(function () {
    return loadJSONAsync('absent.json');
})
    .then(function (val) { console.log(val); }) //	never	called				
["catch"](function (err) {
    console.log('absent.json	error', err.message);
})
    //	invalid	json	file				
    .then(function () {
    return loadJSONAsync('bad.json');
})
    .then(function (val) { console.log(val); }) //	never	called				
["catch"](function (err) {
    console.log('bad.json	error', err.message);
});
//--------	main.ts	--------
//	Una	función	asincróna	simulando	la	petición	desde	el	servidor 
function loadItem(id) {
    return new Promise(function (resolve) {
        console.log('loading	item', id);
        setTimeout(function () {
            resolve({ id: id });
        }, 1000);
    });
}
//	Cadena	(serie) 
var item1, item2;
loadItem(1)
    .then(function (res) {
    item1 = res;
    return loadItem(2);
})
    .then(function (res) {
    item2 = res;
    console.log('done');
}); //	overall	time	will	be	around	2s
//	Paralelo 
Promise.all([loadItem(1), loadItem(2)])
    .then(function (res) {
    item1 = res[0], item2 = res[1];
    console.log('done');
}); //	overall	time	will	be	around	1s
