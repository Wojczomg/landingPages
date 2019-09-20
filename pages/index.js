import Head from 'next/head';
import Link from 'next/link';




const Index = () => (
    <div>
    <Head>
    <script src="https://unpkg.com/scrollreveal"></script>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
    <script src="https://kit.fontawesome.com/a483844c2d.js"></script> 
    </Head>
    <div class="w3-bar w3-black">
    <Link href="/resp2">
      <div className={"w3-bar-item w3-button w3-right"}>NEXT PAGE</div>
    </Link>
    </div> 
    
    <div className={"w3-container w3-light-grey"}>
        <div class="w3-row-padding  w3-large " style={{marginTop:"50px",marginBottom:"50px"}}>
            <div class="w3-quarter">
                <div className={"w3-card-4 w3-padding-16 w3-center w3-light-grey w3-hover-dark-gray"}>HOME</div>
            </div>
            <div class="w3-quarter">
                <div className={"w3-card-4 w3-padding-16 w3-center w3-light-grey w3-hover-dark-gray"}>ABOUT</div>
            </div>
            <div class="w3-quarter">
                <div className={"w3-card-4 w3-padding-16 w3-center w3-light-grey w3-hover-dark-gray"}>SERVICES</div>
            </div>
            <div class="w3-quarter">
                <div className={"w3-card-4 w3-padding-16 w3-center w3-light-grey w3-hover-dark-gray"}>CONTACT</div>
            </div>
        </div>



        <div className={"w3-row-padding"}>
            <div className={"w3-col l9 w3-display-container"} style={{maxHeight:"600px",overflow:"hidden"}}> 
                <img src={"../static/biznes1.jpg"} className={"w3-grayscale"} style={{width:"100%"}}></img>       
                <div className={"w3-display-right  w3-text-white w3-hide-medium w3-hide-small"} style={{marginRight:"50px",paddingBottom:"90px"}}>
                    <div className={"w3-jumbo"}>Your Web Presence</div>
                    <div className={"w3-large"} >Labore invidunt amet accusam stet ipsum sit no eirmod sit. Est kas.</div>
                    <div className={"w3-large"} >Vero est aliquyam dolor erat no consetetur justo. Et diam kasd et.</div>
                    <div className={"w3-large"} >Vero est aliquyam dolor erat no consetetur justo.</div>
                </div>
            </div>

            <div className={"w3-container w3-hide-large w3-center"}>
                <div className={"w3-xxxlarge "}>Your Web Presence</div>
                <div className={"w3-large"}>Labore invidunt amet accusam stet ipsum sit no eirmod sit. Est kas.</div>
                <div className={"w3-large"}>Vero est aliquyam dolor erat no consetetur justo. Et diam kasd et.</div>
                <div className={"w3-large"}>Vero est aliquyam dolor erat no consetetur justo.</div>
            </div>

            <div className={"w3-col l3 w3-hide-small w3-hide-medium"}>
                <div className={"w3-card-2"} style={{height:"300px"}}>
                    <div className={"w3-text-dark-grey w3-padding-16 w3-center w3-xlarge"}>
                        Membership
                    </div>
                    <div className={"w3-text-dark-grey w3-padding-48 w3-center w3-xxlarge"}>
                    $199/mo 
                    </div>
                    <div className={"w3-text-dark-grey  w3-center w3-xlarge"}  >
                        <button class="w3-button w3-dark-grey">Buy Now</button>
                    </div>
                </div>
                <div className={"w3-card-2"} style={{height:"300px"}}>
                    <div className={"w3-text-dark-grey w3-padding-16 w3-center w3-xlarge"}>
                    Pro Membership
                    </div>
                    <div className={"w3-text-dark-grey w3-padding-48 w3-center w3-xxlarge"}>
                    $299/mo 
                    </div>
                    <div className={"w3-text-dark-grey  w3-center w3-xlarge"} >
                        <button class="w3-button w3-dark-grey">Buy Now</button>
                    </div>
                </div>

            </div>

            <div className={"w3-hide-large w3-row w3-margin-bottom w3-margin-top"}>
                <div className={"w3-card-2 w3-col m6"} style={{height:"300px"}}>
                    <div className={"w3-text-dark-grey w3-padding-16 w3-center w3-xlarge"}>
                        Membership
                    </div>
                    <div className={"w3-text-dark-grey w3-padding-48 w3-center w3-xxlarge"}>
                    $199/mo 
                    </div>
                    <div className={"w3-text-dark-grey  w3-center w3-xlarge"}  >
                        <button class="w3-button w3-dark-grey">Buy Now</button>
                    </div>
                </div>
                <div className={"w3-card-2 w3-col m6"} style={{height:"300px"}}>
                    <div className={"w3-text-dark-grey w3-padding-16 w3-center w3-xlarge"}>
                    Pro Membership
                    </div>
                    <div className={"w3-text-dark-grey w3-padding-48 w3-center w3-xxlarge"}>
                    $299/mo 
                    </div>
                    <div className={"w3-text-dark-grey  w3-center w3-xlarge"} >
                        <button class="w3-button w3-dark-grey">Buy Now</button>
                    </div>
                </div>

            </div>
        </div>



        
        <div class="w3-row-padding  w3-large " style={{marginTop:"50px",marginBottom:"50px"}}>
            <div class="w3-quarter w3-col m6 l3">
                <div className={"w3-card-4 w3-padding-16 w3-center w3-light-grey w3-hover-dark-gray"}>
                    <div className={"w3-xxxlarge w3-padding"}>
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <div className={"w3-xxlarge w3-padding"}>
                    Analytics 
                    </div>
                    <div className={" w3-padding"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                    </div>
                </div>
            </div>
            <div class="w3-quarter w3-col m6 l3">
                <div className={"w3-card-4 w3-padding-16 w3-center w3-light-grey w3-hover-dark-gray"}>
                    <div className={"w3-xxxlarge w3-padding"}>
                        <i class="fas fa-search-dollar"></i>
                    </div>
                    <div className={"w3-xxlarge w3-padding"}>
                    Marketing 
                    </div>
                    <div className={"w3-padding"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                    </div>
                </div>
            </div>
            <div class="w3-quarter w3-col m6 l3">
                <div className={"w3-card-4 w3-padding-16 w3-center w3-light-grey w3-hover-dark-gray"}>
                    <div className={"w3-xxxlarge w3-padding"}>
                        <i class="fas fa-tablet-alt"></i>
                    </div>
                    <div className={"w3-xxlarge w3-padding"}>
                    Development 
                    </div>
                    <div className={" w3-padding"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                    </div>
                </div>
            </div>
            <div class="w3-quarter w3-col m6 l3">
                <div className={"w3-card-4 w3-padding-16 w3-center w3-light-grey w3-hover-dark-gray"}>
                    <div className={"w3-xxxlarge w3-padding"}>
                        <i class="fas fa-headset"></i>
                    </div>
                    <div className={"w3-xxlarge w3-padding"}>
                    Support 
                    </div>
                    <div className={" w3-padding"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?
                    </div>
                </div>
            </div>
        </div>


        
        <div className={"w3-row-padding w3-card-4"}>
            <div className={"w3-col l6 "} style={{padding:"50px"}}>
                 <img src="../static/biznes2.jpg" style={{width:"100%"}}></img>
            </div>
            <div className={"w3-col l6 w3-text-dark-grey"} style={{padding:"50px"}}>
                <h1 className={"w3-xxxlarge"}>Your Business On The Web</h1>
                <div className={"w3-container w3-xlarge"}> 
                    Rebum labore magna sanctus magna eirmod. Tempor stet amet lorem sanctus lorem sanctus et. Amet sanctus invidunt et duo magna gubergren sea et amet. Clita sadipscing lorem et elitr nonumy eirmod labore. Lorem et et gubergren ipsum. Sea ea dolores et sea accusam, at amet labore vero sadipscing, dolore amet aliquyam voluptua dolores voluptua erat sed dolor erat, ipsum ipsum.
                </div>
            </div>
        </div>

        

       
        



    </div>

    <div className={"w3-black w3-center w3-large w3-padding-16"}>
        Diam ea nonumy @ 2019
    </div>









    </div>
);

export default Index;
