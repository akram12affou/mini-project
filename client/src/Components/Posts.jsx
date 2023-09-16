import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Posts.scss";
import { useCookies } from "react-cookie";

function Posts() {
  const [cookies, setCookie, removeCookie] = useCookies(["accestoken"]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data);
      setLoading(false);
     
    });
  }, []);
  const deleteTodo = (id) => {
    axios.delete("http://localhost:3000/posts/" + id).then((res) => {
      
    });
  }
  return (
    <>
      {loading ? <center><h2>LOADING...</h2></center> : <> <div className="post-container">
        {posts.map((e) => {
          return (
            <div key={e._id}>
             {e.username==window.localStorage.getItem("username") ?  <code>user: you</code> :  <code>user: {e.username}</code>}
              <h2>{e.text}</h2>
            {e.username==window.localStorage.getItem("username") && <button onClick={() => deleteTodo(e._id)}>delete</button>}

            </div>
          );
        })}
        {posts.length ==0 && 'no posts yet'}
      </div></>}
     
    </>
  );
}

export default Posts;
