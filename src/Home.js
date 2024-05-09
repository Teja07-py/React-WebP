import './home.css'
export function Home()
{
    return(
        <div style={{backgroundColor:"rgba(128, 128, 128, 0.155)"}}>
        <div id='nav'>
            <div id="logo"><img style={{margin:"15px auto"}}src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/>
           </div>
           <div style={{margin:"15px",width:"45%"}}className="input-group mb-3 search">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1"><img src="https://img.icons8.com/?size=50&id=132&format=png" height="23px" width="25px"/></button>
           <input type="text" className="form-control" placeholder="Search for Products,Brands and More" aria-label="Example text with button addon" aria-describedby="button-addon1"/></div>
           <div id="options">
           <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/login-1994012-1682995.png?f=webp&w=256" height="25px" width="25px"/>
            <a href="" style={{textDecoration:"none",color:"black"}}>Login</a>
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-cart-389-458456.png?f=webp&w=256" height="23px" width="25px"/>
            <a href="" style={{textDecoration:"none",color:"black"}}>Cart</a>
            <a href="" style={{textDecoration:"none",color:"black"}}>Your Orders</a>
            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/seller-1490747-1262220.png?f=webp&w=256" height="23px" width="25px"/>
            <a href="" style={{textDecoration:"none",color:"black"}}>Become a Seller</a>
            </div>
        </div> 
        <div id="title">
            <div style={{width:"10%"}}></div>
            <div style={{width:"10%",textAlign:"center",marginTop:"10px"}}> <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" width="60%"/>
            <h6 >Grocery</h6></div>
            <div style={{width:"10%",textAlign:"center",marginTop:"10px"}}>
            <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" width="60%"/>
            <h6>Mobiles</h6>
            </div>
            <div style={{width:"10%",textAlign:"center",marginTop:"20px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIG8XPJW7NWFyIC0kbxDzPYPKLxVeQWpNjRmWFOGXHI56ZMeoPa65s4dJDVZ008NQ1jyE&usqp=CAU" width="60%" height="53%"/>
            <h6 style={{marginTop:"10px"}}>Style</h6>
            </div>
            <div style={{width:"10%",textAlign:"center",marginTop:"20px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTln3PiNCZUguROVtieLa6Hjyj4g8gLeBizTg&usqp=CAU" width="60%"height="53%"/>
            <h6 style={{marginTop:"10px"}}>Electronics</h6>
            </div>
            <div style={{width:"10%",textAlign:"center",marginTop:"20px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-tot36VyBPJAe3nTZeUkrs8KIM2zoNBG7g1ohVx0JGv0-Q7n2tUBZIM99Dg-bhaXY2E&usqp=CAU" width="60%" height="53%"/>
            <h6 style={{marginTop:"10px"}}>Home&furniture</h6>
            </div>
            <div style={{width:"10%",textAlign:"center",marginTop:"10px"}}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" width="60%"/>
            <h6>Appliances</h6>
            </div>
            <div style={{width:"10%",textAlign:"center",marginTop:"10px"}}>
            <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" width="60%"/>
            <h6>Travel</h6>
            </div>
            <div style={{width:"10%",textAlign:"center",marginTop:"20px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvf0YNZXyZpV_DIky1ltgQ4Di4XMxiIuKvIA&usqp=CAU" width="60%" height="53%"/>
            <h6 style={{marginTop:"10px"}} >Toys</h6>
            </div>
            <div style={{width:"10%",textAlign:"center",marginTop:"20px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RdSZ_gL2IDvjoO4dPdpCWCHmaqBfXkj8nA&usqp=CAU" width="60%" height="53%"/>
            <h6 style={{marginTop:"10px"}} >Two Wheelers</h6>
            </div>
            <div style={{width:"10%"}}></div>

        </div>
        <div className='carousel' id="caro" data-bs-ride="carousel" data-bs-interval="2000">
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/611e77220cd10cee.png?q=20"/>
                </div>
                <div className='carousel-item'>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/2b65b183b4f0a8cc.jpg?q=20"/>
                </div>
                <div className='carousel-item'>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6701030f290f9f81.jpg?q=20"/>
                </div>
                <div className='carousel-item'>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/60b019a3f4125e28.png?q=20"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#caro" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#caro" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
        <div id="productss">
          <h2 style={{margin:"10px"}}>Best of Electronics</h2>
          <div id="gd">
        <div id="col1">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70" width="90%" height="60%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Canon camera</h4>
        <h6>From Rs40,000</h6>
        </div>
        <div id="col2">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/612/612/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70" width="90%" height="60%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Projectors</h4>
        <h6>From Rs10,000</h6>
        </div>
        <div id="col3" >
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/printer/e/k/r/-original-imagqsmzectcgpry.jpeg?q=70" width="90%" height="60%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Printers</h4>
        <h6>From Rs3,999</h6>
        </div>
        <div id="col4">
        <img style={{margin:"25px"}} src="https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/multi-device-keyboard/8/r/v/els-wk-710-elista-original-imagrzrxhya5ycyz.jpeg?q=70" width="80%" height="50%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Keyboards</h4>
        <h6>From Rs299</h6>
        </div>
        <div id="col5">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/j/m/hp250-g9-laptop-hp-original-imagwcgzxhfsjedf.jpeg?q=70" width="90%" height="60%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Laptops</h4>
        <h6>From Rs40,000</h6>
        </div>
        <div id="col6">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/312/312/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70" width="90%" height="60%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Monitors</h4>
        <h6>From Rs8,999</h6>
        </div>
          </div>
        </div>
        <div id="products1">
          <h2 style={{margin:"10px"}}>Appliances</h2>
          <div id="gd1">
        <div id="col1">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/mixer-grinder-juicer/l/e/d/-original-imaghehsw8qrhnbp.jpeg?q=70" width="90%" height="55%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Mixer grinder</h4>
        <h6>From Rs2,499</h6>
        </div>
        <div id="col2">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/2/6/m/-original-imagx7qhyteggfcb.jpeg?q=90" width="70%" height="55%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px 10px 10px 10px"}}>Washing machine</h4>
        <h6>From Rs9,999</h6>
        </div>
        <div id="col3" >
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/612/612/l1v1uvk0/air-cooler/v/l/0/-original-imagdcf5utjhkyzz.jpeg?q=70" width="90%" height="55%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Cooler</h4>
        <h6>From Rs7,999</h6>
        </div>
        <div id="col4">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/i/o/t/-original-imagxy9kkcszjssd.jpeg?q=70" width="80%" height="55%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>AC</h4>
        <h6>From Rs25,000</h6>
        </div>
        <div id="col5">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/312/312/xif0q/fan/6/3/l/-original-imagpm24qb2wghng.jpeg?q=70" width="90%" height="55%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Fans</h4>
        <h6>From Rs8,999</h6>
        </div>
        <div id="col6">
        <img style={{margin:"10px"}} src="https://rukminim2.flixcart.com/image/312/312/kyyqpow0/iron/j/c/i/dx-2-bajaj-original-imagb3fbcttfvunp.jpeg?q=70" width="90%" height="55%%"alt="Product 1"/>
        <h4 style={{textAlign:"center",margin:"10px"}}>Dry Iron</h4>
        <h6>From Rs699</h6>
        </div>
          </div>
        </div>
        <div id="third">
            <div id="fi"><h6 style={{fontSize: "small"}}><b>Flipkart</b></h6>
            <p style={{fontSize: "x-small"}}>Simple tool for online Shopping</p>
            <p style={{fontSize: "x-small"}}>Stay in touch with us</p>
            </div>
            <div id="sc"><h6 style={{fontSize: "xx-small"}}><b>Product</b></h6>
            <p style={{fontSize: "x-small"}}>Features</p>
            <p style={{fontSize: "x-small",marginTop: "-12px"}}>Integrations</p>
            <p style={{fontSize: "x-small",marginTop: "-12px"}}>Enterprise</p>
            </div>
            <div id="th">
               <h6 style={{fontSize: "x-small"}}><b>Pricing</b></h6>
               <p style={{fontSize: "x-small"}}>Fee version</p>
               <p style={{fontSize: "x-small",marginTop: "-12px"}}>Comparision</p>
            </div>
            <div id="fo">
               <h6 style={{fontSize: "x-small"}}><b>Company</b></h6>
               <p style={{fontSize: "x-small"}}>About Us</p>
               <p style={{fontSize: "x-small",marginTop: "-12px"}}>Jobs</p>
               <p style={{fontSize: "x-small",marginTop: "-12px"}}>News</p>
            </div>
            <div id="fif">
               <h6 style={{fontSize: "x-small"}}><b>Resources</b></h6>
               <p style={{fontSize: "x-small"}}>Blog</p>
               <p style={{fontSize: "x-small",marginTop: "-12px"}}>Knowledge hut</p>
               <p style={{fontSize: "x-small",marginTop: "-12px"}}>Sales support</p>
            </div>
            <div id="si">
               <h6 style={{fontSize: "x-small"}}><b>Support</b></h6>
            <p style={{fontSize: "x-small"}}>Chat</p>
            <p style={{fontSize: "x-small",marginTop: "-12px"}}>Feedback</p>
            <p style={{fontSize: "x-small",marginTop: "-12px"}}>Contact Form</p>
            </div>
        </div>
        </div>
    
    )
}