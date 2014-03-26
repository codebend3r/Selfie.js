function Class() { }
Class.prototype.constructor = function() {};
//Class.prototype.super = null;
Class.extend = function(def) {

	var proto = new this(Class);
	var superClass = this.prototype;
	var classDefinition = function() {
		if (arguments[0] !== Class) {
			this.constructor.apply(this, arguments); 
		};
		this.super = superClass;
	};

	var item;

	//console.log('superClass', superClass);

	for (var i in superClass) {
		item = superClass[i];
		if (item instanceof Function && i !== 'constructor' && i !== 'super') {
			console.log('i', i);
			item = item.bind(superClass);
			//superClass[i] = superClass[i].bind(superClass);
		};
	}

	for (var n in def) {
		item = def[n];
		if (item instanceof Function) {
			proto[n] = item;
		} else {
			proto[n] = item;
		};
	};

	proto.super = superClass.constructor.bind(superClass);

	classDefinition.prototype = proto; 
	classDefinition.extend = this.extend;
	console.log('/////////////////////');
	return classDefinition;
	
};