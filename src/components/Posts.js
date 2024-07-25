import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost } from "./../redux/features/PostSlice";
import Spinner from "./Spinner";

const Posts = () => {
  const [id, setId] = useState("");
  const [textBody, setTextBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const { loading, post} = useSelector((state) => ({
    ...state.app,
  }));
    //function
  const handleFetchData = (e) => {
    e.preventDefault();
    console.log(id);
    if (!id) {
      window.alert("Please Provide Post ID");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };
  return (
    <>
      <div className="row mt-4 d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <form action="">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Search By ID:
              </label>
              <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}                
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              onClick={handleFetchData}
              type="submit"
              className="btn btn-primary"
            >
              Fetch Post
            </button>
            <button
              onClick={() => navigate("/createpost")}
              type="button"
              className="btn btn-warning ms-4"
            >
              create post
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <>
           {post.length > 0 && (
            <div className="card mt-4">
                  <div className="card-body">
                    <h5 className="card-title">{post[0].title}</h5>
                  </div>
            </div>
           )
           }
          </>
        )
      }
      </div>

    </>
  )
}

export default Posts;
