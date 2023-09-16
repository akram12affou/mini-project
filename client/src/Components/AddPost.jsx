import React, { useState } from "react";
import "../styles/AddPost.scss";
import axios from "axios";
import { useCookies } from "react-cookie";

function AddPost() {
  const [cookies, setCookie, removeCookie] = useCookies(["accestoken"]);
  const [newPost, setNewPoost] = useState("");
  const addPost = () => {
    axios
      .post("http://localhost:3000/posts/add-post/" + cookies.accestoken, {
        text: newPost,
        userId: window.localStorage.getItem("userId"),
        username: window.localStorage.getItem("username"),
      })
      .then((res) => {})
      .catch((err) => {
        alert(err.response.data);
      });
  };
  return (
    <center className="newPost-form-container">
      <br />
      Post Text :{" "}
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPoost(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>
      <hr />
    </center>
  );
}

export default AddPost;
