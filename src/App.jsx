
import './App.css';
import { HashRouter as Router,Routes,Route, useNavigate} from 'react-router-dom';
import './login.css';
import './register.css';
import axios from "axios";

import {Link} from 'react-router-dom';
import { useState } from 'react';
function App() {
  return (       
      <Router>     
        <Routes> 
             <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
           <Route path="/login" element={<Login />}/> 
           <Route path="/register" element={<Registration />}/> 
          </Routes>         
      </Router>        
  );
}
export  function Home()
{
    return(
    <body>
      <div className="App">
             <nav>
                  <Link to="/home" className='a'>Home</Link>
                  <Link to="/login" className='a'>Login</Link>
                  <Link to="/register" className='a'>Registration</Link>
              </nav>

              <h1 style={{color:'black'}}>JPSV</h1>
      <div className='san'>
      <div id="d1">
         <a href="#d1.1"> <img src= "./images/anime.jpg" /></a>
          <h1>Anime and Cartoons</h1>
          <a href="#d1.2"> <img src="./images/cartoon.jpg"  /></a>
       </div><br/><br/>
      <div  id="d2">
        <a href="#d1.3"><img src="./images/books.jpg"  /></a>
        <h1>Books</h1>
        <a href="#d1.3"> <img src="./images/books1.jpg" /></a>
      </div><br/><br/>
      <div  id="d3">
        <a href="#d1.4"><img src="./images/p1.jpeg"  /></a>
        <h1>learning programming languages</h1>
        <a href="#d1.4"> <img src="./images/p2.jpg"  /> </a>
      </div><br/><br/>
      <div  id="d4">
        <a href="#d1.5"><img src="./images/m1.jpg"  /></a>
        <h1>Movies and Series</h1>
        <a href="#d1.6"><img src="./images/s1.jpg"  /></a>
     </div><br/><br/>
      <h1 id="d1.1">Anime</h1>
      <div  className="img1">
        <img src="/images/a1.jpg" class="im"  />
        <img src="/images/a2.jpg" class="im"  />
        <img src="/images/a3.jpg" class="im"  />
        <img src="/images/a4.jpg" class="im" />
        <img src="/images/a5.jpg" class="im" />
        <img src="/images/a6.jpg" class="im" />
        <img src="/images/a7.jpg" class="im" /></div><br/><br/>
     <h1 id="d1.2">Cartoon</h1>
      <div  className="img1">
        <img src="./images/c1.jpg" class="im"  />
        <img src="./images/c2.jpg" class="im"  />
        <img src="./images/c3.jpg" class="im"  />
        <img src="./images/c4.jpg" class="im" />
        <img src="./images/c5.jpg" class="im" />
        <img src="./images/c6.jpg" class="im" />
        <img src="./images/c7.jpg" class="im" /></div><br/><br/>
        <h1 id="d1.3">Books</h1>
      <div  className="img1">
            <img src="./images/b1.jpg" class="im" />
            <img src="./images/b2.jpg" class="im"  />
            <img src="./images/b3.jpg" class="im"  />
            <img src="./images/b4.jpg" class="im" />
            <img src="./images/b5.jpg" class="im" />
            <img src="./images/b6.jpg" class="im" />
            <img src="./images/b8.jpg" class="im" /></div><br/><br/>
            <h1 id="d1.4">programming</h1>
       <div  className="img1">
                <img src="./images/p1.1.jpg" class="im"  />
                <img src="./images/p2.1.jpg" class="im"  />
                <img src="./images/p3.jpg" class="im"  />
                <img src="./images/p4.jpg" class="im" />
                <img src="./images/p5.jpg" class="im" />
                <img src="./images/p6.jpg" class="im" />
                <img src="./images/p7.jpg" class="im" /></div><br/><br/>
   
                <h1 id="d1.5" >Movies</h1>
        <div className="img1">
                    <img src="./images/m1.1.jpg" class="im" />
                    <img src="./images/m2.jpg" class="im"  />
                    <img src="./images/m3.jpg" class="im"  />
                    <img src="./images/m4.jpg" class="im" />
                    <img src="./images/m5.jpg" class="im" />
                    <img src="./images/m6.jpg" class="im" />
                    <img src="./images/m7.jpg" class="im" /></div><br/><br/>
                    <h1  id="d1.6">Series</h1>
        <div className="img1">
                        <img src="./images/s1.1.jpg" class="im" />
                        <img src="./images/s2.jpg" class="im"  />
                        <img src="./images/s3.jpg" class="im"  />
                        <img src="./images/s4.jpg" class="im" />
                        <img src="./images/s5.jpg" class="im" />
                        <img src="./images/s6.jpg" class="im" />
                        <img src="./images/s7.jpg" class="im" /></div><br/><br/>
                        </div>
      </div>
   </body>
    );
}
export  function Login(){
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      alert('Login failed');
    }
  };
  return(
      
    <div>

           <h1>login</h1>
           <form  class="s2" id="login"  onSubmit={(e) => { e.preventDefault(); handleLogin(); }} >
               <label>username:</label>
               <input type="username" id="san" onChange={e=>setForm({...form,username: e.target.value})}/><br/><br/>
               <lable>Password:</lable>
               <input type="password" onChange={e=>setForm({...form,password: e.target.value})}/><br/><br/>
               <button onClick={handleLogin}>submit</button>
               <p>If you don't have account <Link to="/register">register</Link></p>
           </form>
    </div>
      
  );
}
export  function Registration(){

  const [form, setForm] = useState({FirstName:'',LastName: '',username:'',email:'',mobile:'',password:'',dateofbirth:''});
  const navigate = useNavigate();
  
  const hr= async()=>{
    try{
      const r=await axios.post('http://localhost:5000/register', form);
      alert('Registration Successful');
      navigate('/login');
    }
    catch(err){
      console.error("Axios Error:", err.response ? err.response.data : err.message);
      alert("register fails");
    }
  };

  return(
  
   <div>
      <h1>Signup</h1>
      <form  class="s1" onSubmit={(e) => { e.preventDefault(); hr(); }}>
          <label>First name:</label>
          <input type="text" id="1" value={form.FirstName} required onChange={e=>setForm({...form,FirstName: e.target.value})}/><br/><br/>
          <label>Last name:</label>
          <input type="text"  id="2" value={form.LastName} required onChange={e=>setForm({...form,LastName: e.target.value})}/> <br/><br/>
          <label>First name:</label>
          <input type="text" id="1" value={form.username} required onChange={e=>setForm({...form,username: e.target.value})}/><br/><br/>
          <label>Email id:</label>
          <input type="email"  id="3" value={form.email}required onChange={e=>setForm({...form,email: e.target.value})}/><br/><br/>
          <label>Mobile no:</label>
          <input type="tel"  id="4" value={form.mobile} required onChange={e=>setForm({...form,mobile: e.target.value})}/><br/><br/>
          <label>Create Password:</label>
          <input type="password"  id="5" value={form.password} required onChange={e=>setForm({...form,password: e.target.value})}/><br/><br/>
          <label >Gender:</label> <input type="radio" name="Gender"/>Male 
          <input type="radio" name="Gender"/>Female <br/><br/>
          <label>Choose file:</label>
          <input type="file" required/><br/><br/>
          <label>Date of birth:</label>
          <input type="date"  value={form.dateofbirth} required onChange={e=>setForm({...form,dateofbirth: e.target.value})}/><br/><br/>
         
          <button type="submit" >Submit</button>
          <p>If you have account <Link to="/login">Login</Link></p>
      </form>
  </div>
  
  );
}



export default App;
