import React, { useState } from "react";
import "../styles/AddPost.scss";
function AddPost() {
  const [newPost, setNewPoost] = useState("");
  const addPost = () => {
    alert('add')
  }
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
