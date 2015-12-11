<h1>Wooooo Super easy sticky footer!</h1>
<hr />
<h3>This is a very very simple sticky footer that expands with content. You call it like any other function
<code>superEasySticky_Footer();</code> in between your script tags. AFTER jQuery</h3>
<h4>You MUST have the footer node in html used, not the div node with a footer class. And you must have your in your css the following: <br />
<code>
footer {
  display:none;
  }</code><br />
  
  You can put whatever you like in there to style as long as the display none is in there, what this does is if you have a large website, the 
  footer will not show up until the page is loaded, so it is not hangning in the middle of the screen looking dumb</h4>
  <h4>It accepts two parameters, the first one is adjustment for browser height, I tested it and it is set at document height minus 50 
  pixles. If you need to adjust that to line up at the bottom of the screen when there is no content, that is the first parameter. The
  second parameter is the space between the bottom of the content and the footer, I have it set at default at 20 pixles, but you can put whatever in you want. 
  <br />
  An example with parameters is <br />
  <code>superEasySticky_Footer(15, 175);</code>
  <br />
  <br />
  Enjoy!
  </h4>
