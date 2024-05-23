import React from 'react'

function Navbar({setCategory}) {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-3">News App</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div className="navbar-nav nav-underline">
              <div className="nav-link" onClick={()=>setCategory("general")} >General</div>
              <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
              <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
              <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
              <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
              <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
              <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar