//	Disposable	Mixin class	Disposable	{				
    isDisposed:	boolean;				
    dispose()	{								
        this.isDisposed	=	true;				
    }
}
//	Activatable	Mixin class	Activatable	{				
    isActive:	boolean;				
    activate()	{								
        this.isActive	=	true;				
    }				
    deactivate()	{								
        this.isActive	=	false;				
    } 
}
class	SmartObject	implements	Disposable,	Activatable	{				
    //	Este	constructos	lo	que	hará	será	que	mostrará	por	pantalla				
    //	los	estados	isActive	y	isDisposed	cada	500	ms				
    constructor()	{								
        setInterval(()	=>	console.log(this.isActive	+	"	:	"	+	this.isDisposed),	500);				
    }
		interact()	{								
            this.activate();				
        }
	//	Disposable				
    isDisposed:	boolean	=	false;				
    dispose:	()	=>	void;				
    //	Activatable				
    isActive:	boolean	=	false;				
    activate:	()	=>	void;
    deactivate:	()	=>	void; 
} 
applyMixins(SmartObject,	[Disposable,	Activatable]);
let	smartObj	=	new	SmartObject(); 
//	esto	generará	una	interactuación	cada	segundo	cambiando	el	estado	de 
//	`false	-	false`	a	`true	-	true`	la	primera	vez, 
//	luego	como	la	variable	ya	valdría		`true	-	true` 
//	simplemente	se	dedicaría	a	mostrarla	cada	segundo 
setTimeout(()	=>	smartObj.interact(),	1000);
//////////////////////////////////////// 
//	In	your	runtime	library	somewhere 
////////////////////////////////////////
function	applyMixins(derivedCtor:	any,	baseCtors:	any[])	{				
    baseCtors.forEach(baseCtor	=>	{								
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name	=>	{												
            derivedCtor.prototype[name]	=	baseCtor.prototype[name];								
        });				
    }); 
}
//	Disposable	Mixin class	Disposable	{				
    isDisposed:	boolean;				
    dispose()	{								
        this.isDisposed	=	true;				
    }
}
//	Activatable	Mixin 
class	Activatable	{				
    isActive:	boolean;				
    activate()	{								
        this.isActive	=	true;				
    }				
    deactivate()	{								
        this.isActive	=	false;				
    } 
}

class	SmartObject	implements	Disposable,	Activatable	{

//	Implementamos	Disposable 
isDisposed:	boolean	=	false; 
dispose:	()	=>	void;	//	esto	es	lo	mismo	que	declarar	una	función	vacía
//	Implementamos	Activatable 
isActive:	boolean	=	false; 
activate:	()	=>	void; 
deactivate:	()	=>	void;
function	applyMixins(derivedCtor:	any,	baseCtors:	any[])	{				
    baseCtors.forEach(baseCtor	=>	{								
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name	=>	{												
            derivedCtor.prototype[name]	=	baseCtor.prototype[name];								
        });				
    }); 
}
applyMixins(SmartObject,	[Disposable,	Activatable]);
