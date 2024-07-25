import React from 'react';

const Posts = () => {
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
                
                
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button
              
              type="submit"
              className="btn btn-primary"
            >
              Fetch Post
            </button>
            <button
              
              type="button"
              className="btn btn-warning ms-4"
            >
              create post
            </button>
          </form>
        </div>
      </div> 
    </>
  )
}

export default Posts;
