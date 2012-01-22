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
