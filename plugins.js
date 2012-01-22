var Plugins	= {
	register	: function(object, methodName, metadata) {
		if( object[methodName] ){
			throw new Error('Conflict! Already method called: ' + methodName);
		}
		object[methodName] = metadata[methodName];
	},
	unregister	: function(object, methodName) {
		if( object.hasOwnProperty(methodName) === false ){
			throw new Error('Plugin not found: ' + methodName);
		}
		delete object[methodName];
	},
	registered	: function(object, methodName){
		return object.hasOwnProperty(methodName) === true;
	}
};

module.exports	= Plugins;

/**
 * The Turing plugin module.
 *
 * This is an example plugin:
 *
 *     turing.plugins.register('turnRed', {
 *       name: 'Turn Things Red',
 *       version: '1.0.0',
 *       description: 'Turns the background red',
 *       author: 'Alex Young <alex@example.com>',
 *       licenses: [ { type: 'MIT' } ],
 *
 *       turnRed: function() {
 *         this[0].style.backgroundColor = '#ff0000';
 *         return this;
 *       }
 *     });
 *
 */