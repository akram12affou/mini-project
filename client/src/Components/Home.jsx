import React from 'react'
import AddPost from './AddPost'
import Posts from './Posts'
import {useCookies} from 'react-cookie'
function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['accestoken']);
  return (
    <div>

      {cookies.accestoken ? <AddPost/>  : <center><h1>login to add your posts</h1></center>}
        
        <Posts/>
    </div>
  )
}

export default Home