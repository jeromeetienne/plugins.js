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


```javascript
	Plugins.register(Cat.prototype, 'miaou', {
		name	: 'Cat',
		version	: '1.0.0',
		description : 'hungry cat',
		author	: 'John doe <john.doe@example.com',
		licenses: [ { type: 'MIT' } ],
	
		miaou	: function(){
			console.log("miaou")
		}
	});
```
