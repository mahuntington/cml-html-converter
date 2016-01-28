# CML To HTML Converter

## What is CML?
Check out [the spec!](http://contextual-markup-language.org/)

## What does this library do?
This NPM library is just a single function that implements the CML spec by converting a string of CML into HTML.

## How do I use it?
- Install it using NPM: `npm install cml-html-converter`
- require the module, then call it (example code is best read in github readme.  NPM has issues with tabs).
```javascript
var converter = require('cml-html-converter');
var exampleString = "if the first line contains a line break after it, it is rendered as a header\n" +
"\n" +
"sub headings are single lines that have a line break before and after them, but are not the first line\n" +
"\n" +
"This single line contains a period.  Therefore, it is rendered as a paragraph.  It also contains a link to http://www.google.com, so that is rendered appropriately.\n"+
"\n" +
"lines that either directly preceed another line of text\n" + 
"	or directly succeed another line of text\n" +
"		are rendered as lists\n" +
"			they can also contain links http://www.google.com\n" +
"				you can only forward indent\n" +
"					one tab\n" + 
"						at a\n" +
"							time\n" +
"				but you can back indent as much as you'd like\n" +
"\n" +
"sub heading 2\n";
var htmlString = converter(exampleCMLString); 
```
- in the example above `htmlString` should look something like this:
```html
<h1>if the first line contains a line break after it, it is rendered as a header</h1>
<h2>sub headings are single lines that have a line break before and after them, but are not the first line</h2>
<p>This single line contains a period.  Therefore, it is rendered as a paragraph.  It also contains a link to <a href="http://www.google.com">http://www.google.com</a>, so that is rendered appropriately.</p>
<ul>
	<li>
		lines that either directly preceed another line of text
		<ul>
			<li>
				or directly succeed another line of text
				<ul>
					<li>
						are rendered as lists
						<ul>
							<li>
								they can also contain links <a href="http://www.google.com">http://www.google.com</a>
								<ul>
									<li>
										you can only forward indent
										<ul>
											<li>
												one tab
												<ul>
													<li>
														at a
														<ul>
															<li>
																time
															</li>
														</ul>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										but you can back indent as much as you'd like
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</li>
</ul>
<h2>sub heading 2</h2>
```
