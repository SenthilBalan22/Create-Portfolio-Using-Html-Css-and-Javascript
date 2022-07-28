const about = document.querySelector('#about');
const portFolio = document.querySelector('#port');
const service = document.querySelector('#service');
const contact = document.querySelector('#contact');

function aboutContent() {
    const aboutText = `<section class="about" id="about">
                                           <div class="about-img">
                                                <img src="img/about.jpg">
                                           </div>

                                           <div class="about-text">
                                                <h3>I'm a Designer</h3>
                                                <h2>I Can Design Anything You Want</h2>
                                                <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                                                <a href="#" class="btn">Hire Me</a>
                                           </div>
                                     </section>
                                     
                                     <section class="sub-service">
		<div class="items">
			<div class="sub-box">
				<div class="sub-img">
					<img src="img/target.svg">
				</div>
				<h3>Pixel Perfect</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

			<div class="sub-box">
				<div class="sub-img">
					<img src="img/brush.svg">
				</div>
				<h3>High Quality</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

			<div class="sub-box">
				<div class="sub-img">
					<img src="img/energy.svg">
				</div>
				<h3>Awesome Idea</h3>
				<p>Most common methods for designing websites that work well on desktop is responsive and adaptive design.</p>
			</div>

		</div>
	</section>`;
     document.body.innerHTML=aboutText;                         
}
about.addEventListener('click', aboutContent);

function portFolioContent() {
     const portFolioText = `<section class="portfolio" id="portfolio">
                                                  <div class="heading">
                                                       <h3>Portfolio</h3>
                                                       <h2>My Amazing Work</h2>
                                                       <p>Most common methods for designing websites that work well on desktop is <br> responsive and adaptive design</p>
                                                  </div>

     <div class="portfolio-content">
          <div class="col">
               <img src="img/work1.jpg">
               <div class="layer">
                    <h3>Web Design</h3>
                    <h5>Popup</h5>
               </div>
          </div>

          <div class="col">
               <img src="img/work2.jpg">
               <div class="layer">
                    <h3>Web Design</h3>
                    <h5>Popup</h5>
               </div>
          </div>

          <div class="col">
               <img src="img/work3.jpg">
               <div class="layer">
                    <h3>Web Design</h3>
                    <h5>Popup</h5>
               </div>
          </div>

          <div class="col">
               <img src="img/work4.jpg">
               <div class="layer">
                    <h3>Web Design</h3>
                    <h5>Popup</h5>
               </div>
          </div>

          <div class="col">
               <img src="img/work5.jpg">
               <div class="layer">
                    <h3>Web Design</h3>
                    <h5>Popup</h5>
               </div>
          </div>

          <div class="col">
               <img src="img/work6.jpg">
               <div class="layer">
                    <h3>Web Design</h3>
                    <h5>Popup</h5>
               </div>
          </div>

     </div>
</section>`;

document.body.innerHTML=portFolioText;   
}

portFolio.addEventListener('click', portFolioContent);

function serviceContent() {
     const serviceText = `<section class="service" id="service">
     <div class="heading">
          <h3>Service</h3>
          <h2>What I Do For Clients</h2>
          <p>Most common methods for designing websites that work well on desktop is <br> responsive and adaptive design</p>
     </div>

     <div class="service-content">
          <div class="row">
               <div class="s s-one">
                    <img src="img/anchor.svg">
               </div>
               <h3>Web Design</h3>
               <h5>Starts From <span>$99</span></h5>
               <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
          </div>

          <div class="row">
               <div class="s s-tow">
                    <img src="img/physics.svg">
               </div>
               <h3>Web Design</h3>
               <h5>Starts From <span>$99</span></h5>
               <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
          </div>

          <div class="row">
               <div class="s s-three">
                    <img src="img/contact.svg">
               </div>
               <h3>Web Design</h3>
               <h5>Starts From <span>$99</span></h5>
               <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
          </div>

          <div class="row">
               <div class="s s-four">
                    <img src="img/web.svg">
               </div>
               <h3>Web Design</h3>
               <h5>Starts From <span>$99</span></h5>
               <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
          </div>

     </div>
</section>`;
      document.body.innerHTML=serviceText;                         
 }
 service.addEventListener('click', serviceContent);

 function contactContent() {
     const contactText = `<section class="cta">
     <div class="heading">
          <h2>Completed 1200+ Projects <br> Successfully</h2>
     </div>

     <div class="cta-box">
          <div class="wrap one">
               <h3>1200+</h3>
               <p>Finished Projects</p>
          </div>

          <div class="wrap two">
               <h3>350+</h3>
               <p>Happy Customer</p>
          </div>

          <div class="wrap three">
               <h3>15k</h3>
               <p>Global Customers</p>
          </div>

     </div>
</section>

<section class="contact" id="contact">
		<div class="container">
			<div class="center">
				<h3>Let's talk about everything</h3>
				<p>Don't like forms? Send me an email.</p>
			</div>

			<div class="action">
				<form>
					<input type="email" name="email" placeholder="Enter Your email" required>
					<input type="submit" name="submit" value="Submit">
				</form>
			</div>
		</div>
	</section>

	<div class="ends">
		<p>Made with love by Senthil Balan © 2022</p>
	</div>

`;
      document.body.innerHTML=contactText;                         
 }
 contact.addEventListener('click', contactContent);




 const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})




 
 