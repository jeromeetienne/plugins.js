// import library
var Plugins	= require('../plugins.js');

// declare sample class
var Cat	= function(){}
Cat.prototype.miaou	= function(){
	console.log('Miaou')
	return this;
};

// register the plugins
Plugins.register(Cat.prototype, 'ronron', {
        name	: 'Cat',
        version	: '1.0.0',
        description : 'hungry cat',
        author	: 'John doe <john.doe@example.com',
        licenses: [ { type: 'MIT' } ],

 	ronron	: function(){
		console.log("RonRon")
		return this;
	}
});

// instanciate MyClass
var cat	= new Cat;
// use the class with its plugins
cat.miaou().ronron().miaou();
