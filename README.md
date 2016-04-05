<h1>JavaScript demo of skills (ES5, ES2015, Gulp, OOP in static classes style)</h1>
<h3>Full-featured analogue of Windows calculator</h3>
<h3><a href="http://melomance.net/calc">Full demo</a></h3>
<h3>Functionality:</h3>
<ul>
  <li>... is a full copy of <strong>Windows calculator logic</strong>, all sequences have been elaborated</li>
  <li>... provides app <strong>control from the keyboard</strong> and work with the <strong>clipboard</strong></li>
</ul>

<h3>Programming:</h3>
<ul>
  <li>... written in Vanilla JavaScript <strong>without using jQuery</strong></li>
  <li>... have <strong>ES5</strong> and <strong>ES2015</strong> separate sources (both is full versions)</li>
  <li>... designed with an <strong>object-oriented</strong> approach, the model is moved to services (9), controllers (5) are not overloaded, view-entities taken out separately (2)</li>
  <li>... <strong>individual modules</strong> were created to work with the Clipboard, Keyboard, Notification and Memory</li>
</ul>

<h4>Gulp processing:</h4>
<ul>
  <li><strong>ES5</strong> - collected from the files pack, minimized, unglifyed, console.log and comments deleted</li>
  <li><strong>ES2015</strong> - like ES5 and also processed with Babel</li>
  <li><strong>SCSS</strong> - conveted in CSS, minimized, comments deleted</li>
  <li><strong>HTML</strong> - minimised, comments deleted</li>
  <li><strong>Images</strong> - optimized</li>
  <li>Written <strong>watchers</strong> for separate parts and "Packs"</li>
  <li>Written <strong>error-stubs</strong> and <strong>notifications</strong> for all tasks</li>
</ul>

<h4>Deploy:</h4>
<ul>
<li>1) install all node modules. Enter in console:
<strong>npm install</strong></li>
<li>2) make build
<br><strong>gulp b5</strong> - to generate ES5 build
<br><strong>gulp b2015</strong> - to generate ES2015 build
</ul>
