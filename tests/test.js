// import library
var Plugins	= require('../plugins.js');

// declare sample class
var MyClass	= function(){}
MyClass.prototype.hello	= function(){
	return 'hello';
};

// check some assertions before starting
console.assert( MyClass.prototype['sayWorld'] === undefined );
console.assert( Plugins.registered(MyClass.prototype, 'sayWorld') === false );

// register the plugins
Plugins.register(MyClass.prototype, 'sayWorld', {
        name	: 'helloworlder',
        version	: '1.0.0',
        description : 'test for plugins.js',
        author	: 'Jerome Etienne <jerome.etienne@gmail.com>',
        licenses: [ { type: 'MIT' } ],

 	sayWorld: function(){
		return 'world';
	}
});

// check that the plugins is marked as registered
console.assert( Plugins.registered(MyClass.prototype, 'sayWorld') === true );

// instanciate MyClass
var myClass	= new MyClass();
// test normal method
console.assert( myClass.hello() === 'hello' );
// test plugins method
console.assert( myClass.sayWorld() === 'world' );

// remove the plugin
Plugins.unregister(MyClass.prototype, 'sayWorld');

// check if all is cleaned properly
console.assert( MyClass.prototype['sayWorld'] === undefined );
console.assert( Plugins.registered(MyClass.prototype, 'sayWorld') === false );

// notify the user that all worked
console.log("Worked")