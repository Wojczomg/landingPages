import Head from 'next/head';
import Link from 'next/link';

const branding={
  fontSize: "17px",
};

const showcase={
  backgroundImage: "url("+"../static/action-administration-algeria-2246258.jpg"+")",
  backgroundPosition: "center",
  height: "600px",
  padding: "140px 100px",
  color:"white"
}

const section={
  padding: "40px 0",
}

const showHide = (e) => {
  let x = document.getElementById(e.target.id).nextSibling;
  if (x.className.includes("hide")) {x.className = "w3-show w3-container";}
  else {x.className = "w3-hide w3-container";}
}

const menu = (e) => {
  let x = e.target.nextSibling.nextSibling;
  if (x.className.includes("hide")) {x.className = "w3-mobile w3-show w3-animate-top";}
  else {x.className = "w3-mobile w3-hide";}
}

const resp3 = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> 
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>

    

    <div class="w3-bar w3-black w3-top w3-hide-small">
      <span className={"w3-bar-item w3-mobile"} style={branding}>Total</span>
      <span className={"w3-right w3-mobile"}>
      <Link href="/">
      <div className={"w3-bar-item w3-button"}>NEXT PAGE</div>
    </Link>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">Home</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">ABOUT</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">SERVICES</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">CONTACT</a>
      </span>
    </div>

    <div class="w3-bar w3-black w3-hide-small">
      <span className={"w3-bar-item w3-mobile"} style={branding}>Total</span>
      <span className={"w3-right w3-mobile"}>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">Home</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">ABOUT</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">SERVICES</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">CONTACT</a>
      </span>
    </div>

    <div class="w3-bar w3-black w3-top w3-hide-medium w3-hide-large">
      <i className={"w3-bar-item fa fa-align-justify"} style={{fontSize:"35px"}} onClick={menu}></i>
      <span className={"w3-bar-item w3-right"} style={branding}>Total</span>
      <span className={"w3-right w3-mobile w3-hide"}>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">Home</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">ABOUT</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">SERVICES</a>
        <a href="#" class="w3-bar-item w3-button w3-mobile w3-hover-red">CONTACT</a>
      </span>
    </div>

    <section style={showcase}>
      <div className={"w3-container w3-center"}>
        <h1 className={"w3-animate-opacity"} 
        style={{fontSize:"40px",fontWeight:"700",textTransform:"uppercase"}}>Go Anywhere</h1>
        <hr style={{width:"100px", margin:"auto", borderWidth:"3px", borderColor:"red"}}/>
        <p className={"w3-animate-opacity"} style={{fontSize:"16px", paddingBottom:"20px"}}>
          Lorem amet diam sit magna dolore vero et aliquyam ea. 
          Dolor justo sed amet dolor amet tempor dolor aliquyam 
          lorem. Ut tempor ipsum sit et eos sea lorem. Invidunt 
          labore sit elitr ipsum lorem takimata kasd voluptua sea. 
          Rebum diam.
        </p>
        <button className={"w3-button w3-red w3-large w3-opacity"}>Start Here</button>
      </div>
    </section>

    <section className={"w3-red w3-hover-opacity"} style={section}>
      <div className={"w3-container w3-center"}>
        <i className="fa fa-home" style={{fontSize:"50px"}}></i>
        <h2 style={{padding:"0",margin:"0"}}>Welcome Home</h2>
        <p>Est sed stet kasd tempor takimata tempor.
           Aliquyam dolor ut gubergren lorem magna at, 
           sit gubergren vero dolor justo ipsum.
        </p>
      </div>
    </section>

    <section className={"w3-light-grey w3-hover-opacity"} style={section}>
      <div className={"w3-container w3-center"}>
        <i className="fa fa-cog" style={{fontSize:"50px"}}></i>
        <h2 style={{padding:"0",margin:"0"}}>Let's begin</h2>
        <p>Est sed stet kasd tempor takimata tempor.
           Aliquyam dolor ut gubergren lorem magna at, 
           sit gubergren vero dolor justo ipsum.
        </p>
      </div>
    </section>

    <section  style={section}>
      <div className={"w3-container"}>
        <div className={"w3-row-padding"}>
          <div className={"w3-col m5 l9"}>
            <img src="../static/architecture-asphalt-automobiles-1881543.jpg" style={{width:"100%"}}></img>
          </div>
          <div className={"w3-col m7 l3"}>
          <button onClick={showHide} id="Demo1" className="w3-btn w3-block w3-black w3-left-align">Accusam amet consetetur kasd eirmod.</button>
            <div class="w3-container w3-show">
              <h4>What</h4>
              <p>Et accusam diam kasd labore gubergren gubergren. Dolore lorem ea no sed duo ut lorem nonumy sea, diam aliquyam lorem.</p>
            </div>
            <button onClick={showHide} id="Demo2" className="w3-btn w3-block w3-black w3-left-align">Dolor diam eos amet.</button>
            <div class="w3-container w3-hide">
              <h4>Where</h4>
              <p>Elitr diam sit sanctus justo dolores amet sed sanctus, et elitr et sed kasd ea at. Rebum dolore sed vero.Some text..</p>
            </div>
            <button onClick={showHide} id="Demo3" className="w3-btn w3-block w3-black w3-left-align">Kasd et rebum.</button>
            <div class="w3-container w3-hide">
              <h4>When</h4>
              <p>At consetetur erat eos sed eirmod ea est ipsum est, tempor vero est ea gubergren kasd takimata dolore ut, dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={"w3-red w3-hover-opacity"} style={section}>
      <div className={"w3-container w3-center"}>
        <h1 className={"w3-text-shadow"} style={{padding:"0",margin:"0"}}>Our Services</h1>
        <p>Est sed stet kasd tempor takimata tempor.
           Aliquyam dolor ut gubergren lorem magna at, 
           sit gubergren vero dolor justo ipsum.
        </p>
      </div>
    </section>

    <section className={"w3-light-grey"} style={section}>
      <div className={"w3-container w3-center"}>
        <div className={"w3-row"}>
          <div className={"w3-col m3"}>
            <i className={" fa fa-comment w3-red w3-padding-small w3-xxlarge"}></i>
            <h3>Internet Marketing</h3>
          </div>
          <div className={"w3-col m3"}>
            <i className={" fa fa-search w3-red w3-padding-small w3-xxlarge"}></i>
            <h3>SEO</h3>
          </div>
          <div className={"w3-col m3"}>
            <i className={" fa fa-cubes w3-red w3-padding-small w3-xxlarge"}></i>
            <h3>Software Dev</h3>
          </div>
          <div className={"w3-col m3"}>
            <i className={" fa fa-cloud w3-red w3-padding-small w3-xxlarge"}></i>
            <h3>Cloud Hosting</h3>
          </div>
        </div>
      </div>
    </section>

    <section className={"w3-dark-grey w3-hover-opacity"} style={section}>
      <div className={"w3-container w3-center"}>
        <h1 className={"w3-text-shadow"} style={{padding:"0",margin:"0"}}>Get in Touch</h1>
        <p>Est sed stet kasd tempor takimata tempor.
           Aliquyam dolor ut gubergren lorem magna at, 
           sit gubergren vero dolor justo ipsum.
        </p>
      </div>
    </section>

    <section className={"w3-dark-grey"} style={section}>
      <div className={"w3-container"}>
      <div class="w3-card-4">
        <div class="w3-container w3-red">
          <h2>Contact us</h2>
        </div>
          <form class="w3-container">
          <label>Name</label>
          <input class="w3-input" type="text"/>
          <label>E-Mail</label>
          <input class="w3-input" type="text"/>
          <label>Messagge</label>
          <textarea class="w3-input" type="text"/>
          <button type="submit" className={"w3-btn w3-margin w3-blue w3-right"}>Send</button>
          </form>
        </div> 
        </div>
    </section>

    <footer className={"w3-black w3-padding-large w3-center"} >
      <p style={{margin:"0"}}>Et amet vero et @2019</p>
    </footer>
  </div>
);
  
  export default resp3;
  