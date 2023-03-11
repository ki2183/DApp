import { useState } from 'react';
import './Login.css';
function LoginWindow(){
    
}
function Login(){
    const [delId,setdelId] = useState(false);
    const [delPwd,setdelPwd] = useState(false);
    const [VId, setVId]= useState();

    let idbutton;
    let pwdbutton;

    (delId===false) ? idbutton=null : idbutton=<button id='delId' onClick={()=>{
      setdelId(!delId);
      const focus = document.querySelector('#loginId');
      focus.value="";
      }}>x</button>;
    (delPwd===false) ? pwdbutton=null : pwdbutton=<button id='delPwd'  onClick={()=>{
      setdelPwd(!delPwd);
      const focus = document.querySelector('#loginPassword');
      focus.value="";
      }} >x</button>;
  return (
    <div className="container-login">
      <div>
        <form className='login-case'>
          <div id='loginText'><span className="material-symbols-outlined">login</span> <p>ID 로그인</p></div>
         
          <div><span className="material-symbols-outlined">person</span><input type='text' value={VId} id='loginId' onFocus={()=>{setdelId(!delId);}}>
            </input>{idbutton}</div>
          <div><span className="material-symbols-outlined">key</span><input type='password' id='loginPassword' onFocus={()=>{setdelPwd(!delPwd);}}>
            </input>{pwdbutton}</div>
          <input type='submit' value='로그인'></input>
        <div id='loginEtc'><a href='/joinmember/'>회원가입</a>
          <a href='#'>비밀번호 찾기</a>
          </div>
          <div id='trash'></div>
        </form>

      </div>
    </div>
  );  
}

export default Login;
