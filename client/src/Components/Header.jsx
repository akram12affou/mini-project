import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Header.scss'
import {useCookies} from 'react-cookie'
function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(['accestoken']);
  const navigate = useNavigate();
  const logout = () => {
    removeCookie('accestoken');
    window.localStorage.clear();
  }
  return (
 
    <div className='header-container'>
       <h2>Post App</h2>
       <div>
          <button onClick={() => navigate('/')}>Home</button>
          |  {' '}
          {cookies.accestoken ? 
          <>
          {window.localStorage.getItem('username')} |
          <button onClick={logout}>Logout</button>
          
          </>
          
          
          :<button  onClick={() => navigate('/auth')}>Login</button>}
          
       </div>
    </div>
   
 
    
  )
}

export default Header