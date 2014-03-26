var Animal = Class.extend({

	constructor: function() {
		console.log('new Animal');
	},

	name: 'animal',
	
	whoAmI: function() {
		return 'I am an ' + this.name;
	}

});

/*
var Cat = Animal.extend({

	constructor: function() {
		this.super();
		console.log('new Cat');
	},

	name: 'cat',

	meow: function() {
		return 'MEOWW!!';
	},

	whoAmI: function() {
		return 'I used to be an ' + this.super.name + ' now I am a ' + this.name;
	}

});
*/

var Dog = Animal.extend({

	constructor: function() {
		this.super();
		console.log('new Dog');
	},

	name: 'dog',

	bark: function() {
		return 'WOOF!!';
	},

	whoAmI: function() {
		console.log(this.super.whoAmI());
		return 'OPTIMUS DOG';
	}

});

var Beagle = Dog.extend({

	constructor: function() {
		this.super();
		console.log('new Beagle');
	},

	name: 'beagle',

	howl: function() {
		return 'OOOOOWWWW';
	},

	whoAmI: function() {
		console.log(this.super.whoAmI());
		return 'OPTIMUS BEAGLE';
	}

});


/*
var c = new Cat();
console.log(c.whoAmI());
console.log(c.meow());
console.log('///////////////////');
*/

var d = new Dog();
console.log(d.whoAmI());
console.log(d.bark());
console.log('///////////////////');

var suzi = new Beagle();
console.log(suzi.whoAmI());
console.log(suzi.bark());
console.log(suzi.howl());
console.log('///////////////////');