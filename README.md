a plugins system which is framework independant.

Heavily inpired by the excelent
[Lets Make a Framework series](http://dailyjs.com/tags.html#lmaf)
series on
[dailyjs](http://dailyjs.com/).
[turing.plugins.js](https://github.com/alexyoung/turing.js/blob/master/turing.plugins.js)
implementation is clean, simple and standalone.
I could not ask for more.
More docs on [turingjs]()
All hard work by [alex young](http://alexyoung.org/) [@alex_young](https://twitter.com/alex_young)

## Examples

```javascript
// declare sample class
var Cat	= function(){}
Cat.prototype.miaou	= function(){
	console.log('Miaou')
	return this;
};

// register the plugins
// - include informations for easier management (optional)
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
```
