import "./login.css"
export function Login()
{
    return(
        <div className="title">
            <h2 className="head">SIGN IN</h2>
             <input className="form-control-sm" style={{marginTop:"20px",width:"210px",textAlign:"left"}}type="text" placeholder="Enter username"/>
             <br/>
             <input className="form-control-sm" style={{marginTop:"20px",width:"210px",textAlign:"left"}}type="password" placeholder="Enter password"/>
             <br/>
             <div id="logincontainer">
             <a href="Forgot Password?" id="link"><p>Forgot Password?</p></a>
             <a href="SignUp" id="sign"><p>Signup</p></a>
             </div>
             <button className="form-control-sm btn btn-danger"style={{width:"210px",textAlign:"center"}}>Login</button>
        </div>
    )
}