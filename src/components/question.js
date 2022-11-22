import React from 'react'

export default function question(props) {
  return (
    <>
<div className="mt-4 ">
  <div className="card">
    <div className="card-header bg-primary">
      <h5 className="card-title text-white mt-2" id="exampleModalLabel">Feedback request</h5>
    </div>
    <div className="modal-body">
      <div className="text-center">
        <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
        <p>
          <strong>Your opinion matters</strong>
        </p>
        <p>
          Have some ideas how to improve our product?
          <strong>Give us your feedback.</strong>
        </p>
      </div>

      <hr />

      <form className="px-4" onSubmit={props.submit}>
        <p className="text-center"><strong>Your rating:</strong></p>

        <div className="form-check mb-2">
          <input className="form-check-input" value="Very good" type="radio" name="q1" id="radio3Example1" />
          <label className="form-check-label" htmlFor="radio3Example1">
            Very good
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" value="Good" name="q1" id="radio3Example2" />
          <label className="form-check-label" htmlFor="radio3Example2">
            Good
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="q1" value="Medicore" id="radio3Example3" />
          <label className="form-check-label" htmlFor="radio3Example3">
            Medicore
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="q1" value="Bad" id="radio3Example4" />
          <label className="form-check-label" htmlFor="radio3Example4">
            Bad
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="q1" value="Very Bad" id="radio3Example5" />
          <label className="form-check-label" htmlFor="radio3Example5">
            Very bad
          </label>
        </div>

        <p className="text-center"><strong>What could we improve?</strong></p>

        {/* <!-- Message input --> */}
        <div className="form-outline mb-4">
          <textarea className="form-control" name='q2' id="form4Example3" rows="4"></textarea>
          <label className="form-label" htmlFor="form4Example3">Your feedback</label>
        </div>
        <div className="card-footer text-end">
      <button type="submit" className="btn btn-primary">Save</button>
    </div>
      </form>
    </div>
    
  </div>
</div>
    </>
  )
}
