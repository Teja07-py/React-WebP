import "./register.css"
export function Register()
{
    return(
        <div id="container">
           <div id="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfuADh80SZIutRq-u0bBNEuagqczrtHcSjGA&s" width="350px" height="460px" style={{padding:"15px",borderRadius:"20px"}}/></div>
           <div id="reg">
            <h3 style={{marginTop:"30px",textShadow:"2px 2px 10px white",color:"Black"}}>REGISTER NOW</h3>
            <div id="fl" style={{marginTop:"20px"}}>
                <input type="text" className="form-control-sm" style={{marginLeft:"10px",width:"160px"}} placeholder="First Name"/>
                <input type="text" className="form-control-sm" style={{marginLeft:"10px",width:"160px"}} placeholder="Last Name"/>
            </div>
            <input type="text" className="form-control-sm" style={{marginLeft:"2px",marginTop:"15px",width:"330px"}} 
            placeholder="Username"/>
            <input type="text" className="form-control-sm" style={{marginLeft:"2px",marginTop:"15px",width:"330px"}} 
            placeholder="Email Address"/>
            <select className="form-control-sm" style={{marginLeft:"2px",marginTop:"15px",width:"330px"}} >
                <option>Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
            </select>
            <input type="password" className="form-control-sm" style={{marginLeft:"2px",marginTop:"15px",width:"330px"}} 
            placeholder="Password"/>
            <input type="password" className="form-control-sm" style={{marginLeft:"2px",marginTop:"15px",width:"330px"}} 
            placeholder="Confirm Password"/>
            <button className="btn btn-primary"style={{marginTop:"30px"}}>Register</button>
           </div>
        </div>
    )
}