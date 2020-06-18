import React from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">

			<div id="wrapper" class="fade-in">

					<div id="intro">
						<h1>Teagan Keith</h1>
						<p>A showcase of my work and abilities.</p>
						<ul class="actions">
							<li><a href="#header" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
						</ul>
					</div>


					<header id="header">
						<a href="index.html" class="logo">Massively</a>
					</header>


					<nav id="nav">
						<ul class="links">
							<li class="active"><a href="index.html">My Work</a></li>

						</ul>
						<ul class="icons">
							<li><a href="https://twitter.com/teagankeith" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="https://www.linkedin.com/in/teagankeith/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
							<li><a href="https://github.com/teagankeith" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
						</ul>
					</nav>


					<div id="main">

						
							<article class="post featured">
								<header class="major">
									<h2><a href="#">My name is Teagan Keith</a></h2>
									<p>Before Lambda I had worked as a self-taught programmer, although, in my situation that seemed to not be working out. I am incredibly grateful to Lambda for giving me the structure I needed to learn programming and surrounding me with like minded people to support me as well. After Lambda I would like to work somewhere who's working on open-source applications or materials for people who were just like me before Lambda, learning how to code by their selves, and make it just a tiny bit easier.
</p>
								</header>
								<a href="#" class="image main"><img src="data:image/jpeg;base64,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" alt="" /></a>
							</article>

							<section class="posts">
								<article>
									<header>
										<h2><a href="#">Water My Plants( UI )</a></h2>
									</header>
									<a href="https://bw-water-my-plants-3.github.io/Marketing-Page/index.html" class="image fit"><img src="http://www.ambius.com/blog/wp-content/uploads/2015/05/Watering-Plants-300x300.jpg" alt="" /></a>
									<p>This was my first project working with LESS Compilers/ Basic HTML Syntax / Deployment.</p>
									<ul class="actions special">
										<li><a href="https://github.com/BW-Water-My-Plants-3/Marketing-Page" class="button">See The Code</a></li>
									</ul>
								</article>
								<article>
									<header>
										<h2><a href="#">Primis eget<br />
										imperdiet lorem</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic03.jpg" alt="" /></a>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
									<ul class="actions special">
										<li><a href="#" class="button">See The Code</a></li>
									</ul>
								</article>
								<article>
									<header>
							
										<h2><a href="#">Ante mattis<br />
										interdum dolor</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic04.jpg" alt="" /></a>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
									<ul class="actions special">
										<li><a href="#" class="button">See The Code</a></li>
									</ul>
								</article>
								<article>
									<header>
							
										<h2><a href="#">Tempus sed<br />
										nulla imperdiet</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic05.jpg" alt="" /></a>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
									<ul class="actions special">
										<li><a href="#" class="button">See The Code</a></li>
									</ul>
								</article>
								<article>
									<header>
							
										<h2><a href="#">Odio magna<br />
										sed consectetur</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic06.jpg" alt="" /></a>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
									<ul class="actions special">
										<li><a href="#" class="button">See The Code</a></li>
									</ul>
								</article>
								<article>
									<header>
										<h2><a href="#">Augue lorem<br />
										primis vestibulum</a></h2>
									</header>
									<a href="#" class="image fit"><img src="images/pic07.jpg" alt="" /></a>
									<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
									<ul class="actions special">
										<li><a href="#" class="button">See The Code</a></li>
									</ul>
								</article>
							</section>

			
						
					</div>

	
					<footer id="footer">
						<section>
            <section>
								<h3>Social</h3>
								<ul class="icons alt">
                <li><a href="https://twitter.com/teagankeith" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="https://www.linkedin.com/in/teagankeith/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
							<li><a href="https://github.com/teagankeith" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
								</ul>
							</section>
						</section>
					</footer>


					<div id="copyright">
						<ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
					</div>

			</div>
    </div>
  );
}

export default App;
