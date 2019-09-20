import Head from 'next/head';
import Link from 'next/link';




const resp2 = () => (
    <div>
    <Head>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
    <script src="https://unpkg.com/scrollreveal"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </Head>
    

    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">Scrolls</a>
        <Link href="/resp3">
      <div className={"w3-button w3-right"}>NEXT PAGE</div>
    </Link>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto navbar-right">
        <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        </div>
        </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
    </nav>

    <section style={{marginTop:"70px"}}>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-6 col-sm-7 col-lg-8"}>
                    <div className={"img1"}>
                        <img src="../static/image1.jpg" style={{maxWidth:"100%",marginTop:"70px"}}></img>
                    </div>
                </div>
                <div className={"col-md-6 col-sm-5 col-lg-4 shooow"}>
                    <div className={"showcase-right"} style={{paddingTop:"40px"}}>
                        <h1 className={"display-4"}>Et amet est et dolor</h1>
                        <p>Invidunt lorem sit clita gubergren gubergren 
                            amet sadipscing et dolore et, elitr invidunt 
                            sadipscing nonumy voluptua, accusam takimata 
                            diam dolore.
                        </p>
                        <p className={"d-none d-sm-none d-md-block"}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life ac nim pariatur 
                        cliche reprehenderit, enim eiusmod high life accusamus terr nim pariatur c
                        liche reprehenderit, enim eiusmod high life accusamus terrcusamus terry ric
                        hardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes ande
                        rson cred nesciunt sapiente ea proident.
                        </p>    
                    </div>
                    <button class="btn d-md-none d-lg-none" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Read more
                    </button>
            
            
                </div>


            </div>
            <div class="collapse " id="collapseExample">   
                Anim pariatur cliche reprehenderit, enim eiusmod high life ac nim pariatur 
                cliche reprehenderit, enim eiusmod high life accusamus terr nim pariatur c
                liche reprehenderit, enim eiusmod high life accusamus terrcusamus terry ric
                hardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes ande
                rson cred nesciunt sapiente ea proident.
            </div>
        </div>
    </section>

    <section>
        <div className={"container shoow"}><hr style={{borderWidth:"6px",marginTop:"40px"}}/>
            <p 
            style={{paddingTop:"40px",paddingBottom:"70px",fontSize:"1.4em"}}>
                Diam erat lorem eos justo tempor tempor stet 
                sea stet ea, amet et stet et dolor et. Justo clit
                a sea eirmod sanctus nonumy labore rebum, dolor s
                it sed gubergren lorem. Magna ea et dolor clita con
                setetur, dolore sed rebet et stet et dolor et. Justo clit
                a sea eirmod sanctus nonumy labore rebum, dolor s
                it sed gubergren lorem. Magna ea et dolor um ea.</p>
        </div>    
    </section>

    <section>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-6 col-sm=6 col-lg-8 show-from-left"}>  
                <img src="../static/image2.png" style={{maxWidth:"100%"}}></img>
                </div>
                <div className={"col-md-6 col-sm=6 col-lg-4 show-from-right"}>
                <h2 className={"display-3"}>Justo et lorem</h2>
                <p>Justo eirmod vero takimata  vero takimata et est sanctus magna gubergren sea sadipscito eirmo et est sanctus magna gubergren sea sadipscito eirmod vero takimata et est sanctus magna gubergren sea sadipscing, accusng, accusam kasd justo diam dolor justo et, sit nonumy.</p>
                <br/>
                <button className={"btn btn-default btn-lg showcase-btn"}>Read more</button>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-6 col-sm=6 col-lg-6"}>  
                <h2 className={"display-3"}>Info block 1</h2>
                <p>Justo eirmod Stet dolor sanctus eos sit ea dolore takimata amet sit. Sea magna ipsum sit vero est. Et clita elitr takimata. vero takimata  vero takimata et est sanctus magna gubergren sea sadipscito eirmo et est sanctus magna gubergren sea sadipscito eirmod vero takimata et est sanctus magna gubergren sea sadipscing, accusng, accusam kasd justo diam dolor justo et, sit nonumy.</p>
                <br/>
                </div>
                <div className={"col-md-6 col-sm=6 col-lg-6"}>
                <h2 className={"display-3"}>Info block 2</h2>
                <p>Justo eirmod vero takimata  vero takimata et est sanctus magna gubergren sea sadipscito eirmo et est sanctus magna gubergren sea sadipscito eirmod vero takimata et est sanctus magna gubergren sea sadipscing, accusng, accusam kasd justo diam dolor justo et, sit nonumy.</p>
                <br/>
                </div>
            </div>
        </div>
    </section>

    <hr style={{borderWidth:"6px",marginTop:"40px"}}/>

    <section 
    style={{backgroundImage:"url("+"../static/image3.png"+")", backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover",
    color:"white",paddingTop:"60px",paddingBottom:"60px",fontSize:"1.4em"}}>
        <div className={"container"}>
            <div className={"row"} >
            <div className={"col-md-5 col-sm=5 col-lg-5"}>
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Name" placeholder="Name"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">E-Mail</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="email"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Messagge</label>
                <textarea type="textarea" class="form-control" id="exampleInputPassword1" placeholder="message"/>
            </div>
            <button type="submit" class="btn btn-primary float-right">Send</button>
            </form>
            </div>
            <div className={"col-md-7 col-sm=7 col-lg-7"}>  
            </div>
            </div>
        </div>
    </section>










        


        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="../static/scrolls.js"></script>
    </div>
);






export default resp2;
