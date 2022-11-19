import React from "react";

export default function details(props) {
  return (
    <>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input
          name="name"
            type="text"
            className="form-control"
            id="exampleNameEmail1"
            placeholder="Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
          name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Next
        </button>
      </form>
    </>
  );
}
