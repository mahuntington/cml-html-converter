# CML To HTML Converter

## What is CML?
Check out [the spec!](http://contextual-markup-language.org/)

## What does this library do?
This NPM library is just a single function that implements the CML spec by converting a string of CML into HTML.

## How do I use it?
- Install it using NPM: `npm install cml-html-converter`
- require the module, then call it.
```javascript
	var converter = require('cml-html-converter');
	var exampleCMLString = 
		'item one of root list\n' + //no indentation
		'\titem one of 1st nested list\n' + //indented once
		'\t\titem one of 2nd nested list\n' + //indented twice
		'\titem two of 1st nested list' //indented once
	var htmlString = converter(exampleCMLString); 
```
- in the example above `htmlString` should look something like this:
```html
<ul>
	<li>
		item one of root list
		<ul>
			<li>
				item two of 1st nested list
				<ul>
					<li>
						item one of 2nd nested list
					</li>
				</ul>
			</li>
			<li>
				item two of 1st nested list
			</li>
		</ul>
	</li>
</ul>
```
