import React from 'react'
import "../home.css"
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <div>
         <section className="colored-section" id="title">

<div className="container-fluid">


  <nav className="navbar navbar-expand-lg navbar-dark">

    <a className="navbar-brand" href='/home'>MediCare</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#footer">Contact</a>
        </li>
        <li className="nav-item">
            <Link to="/register"><a className="nav-link">Register</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/login"><a className="nav-link">Login</a></Link>
        </li>
      </ul>

    </div>
  </nav>



  <div className="row">

    <div className="col-lg-6">
      <h1 className="big-heading">Medical Care Now Simplified For Everyone.</h1>
     <Link to="/register"> <button type="button" className="btn btn-dark btn-lg download-button">Register</button></Link>
     <Link to="/login"> <button type="button" className="btn btn-outline-light btn-lg download-button">Login</button></Link>
    </div>

    <div className="col-lg-6">
      <img className="title-image" src={require("../images/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960-removebg-preview.jpg")} alt="iphone-mockup" />
    </div>

  </div>

</div>

</section>



<section className="white-section" id="features">

<div className="container-fluid">
  <h4>Step by step to get your solutions</h4>
  <div className="row">
    <div className="feature-box col-lg-4">
      <i className="icon fa-solid fa-suitcase-medical fa-4x" style={{color: "#2f58cd"}}></i>
      <h3 className="feature-title">Health Complaints</h3>
    </div>

    <div className="feature-box col-lg-4">
      <i className="icon fa-solid fa-user-doctor fa-4x"></i>
      <h3 className="feature-title">Choose Doctor</h3>
    </div>

    <div className="feature-box col-lg-4">
      <i className="icon fa-solid fa-calendar-days fa-4x"></i>
      <h3 className="feature-title">Make a Schedule</h3>
    </div>

   
  </div>


</div>
</section>



<section className="colored-section" id="testimonials">

<div id="testimonial-carousel" className="carousel slide" data-ride="false">
  <div className="carousel-inner">
    <div className="carousel-item active container-fluid">
      <h2 className="testimonial-text">Best Place for consulting Doctors. Easy To Use</h2>
      <img className="testimonial-image" src={require("../images/Screenshot_20230415_162801_Instagram.jpg")} alt="profile" />
      <em>Abdul Hannan, Ahmedabad</em>
    </div>
    <div className="carousel-item container-fluid">
      <h2 className="testimonial-text">Easy to use and can Find Doctors Easily.</h2>
      <img className="testimonial-image" src={require("../images/Screenshot_20230415_163259_Instagram.jpg")} alt="profile" />
      <em>Mohammed Avesh, Ahmedabad</em>
    </div>
  </div>
  <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
<span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
<span className="carousel-control-next-icon"></span>
  </a>
</div>

</section>







<section className="white-section" id="pricing">

<h2 className="section-heading">Many Doctors Available</h2>
<p>Consult Doctor with particular Speciality.</p>

<div className="row">

  <div className="pricing-column col-lg-4 col-md-6">
    <div className="card">
      <div className="card-header">
        <h3>Dr Tapan Shah</h3>
      </div>
      <div className="card-body">
        <h2 className="price-text">Oncology</h2>
        <p>₹500 Fee</p>
        <p>12 Years Experience</p>
        <p>Vastrapur,Ahmedabad</p>
        <button className="btn btn-lg btn-block btn-outline-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>

  <div className="pricing-column col-lg-4 col-md-6">
    <div className="card">
      <div className="card-header">
        <h3>Dr Harsh Shah</h3>
      </div>
      <div className="card-body">
        <h2 className="price-text">Dentist</h2>
        <p>₹700 Fee</p>
        <p>8 Years Experience</p>
        <p>Navrangpura, Ahmedabad</p>
        <button className="btn btn-lg btn-block btn-outline-dark" type="button">Book Now</button>
      </div>
    </div>
  </div>

  <div className="pricing-column col-lg-4">
    <div className="card">
      <div className="card-header">
        <h3>Dr. Abdullah Memon</h3>
      </div>
      <div className="card-body">
        <h2 className="price-text">Surgeon</h2>
        <p>₹1000 Fee</p>
        <p>11 Years Experience</p>
        <p>Thaltej, Ahmedabad</p>
        <button className="btn btn-lg btn-block btn-outline-dark" type="button">Book Now</button>

      </div>
    </div>
  </div>



</div>

</section>



<section className="colored-section" id="cta">

<div className="container-fluid">

  <h3 className="big-heading">Consult with Doctor Now.</h3>
  <Link to="/register"> <button type="button" className="btn btn-dark btn-lg download-button">Register</button></Link>

 <Link to="/login"> <button className="btn btn-outline-light btn-lg download-button" type="button"> Login</button></Link>
</div>
</section>



<footer className="white-section" id="footer">
<div className="container-fluid">
  <i className="social-icon fab fa-facebook-f"></i>
  <i className="social-icon fab fa-twitter"></i>
  <i className="social-icon fab fa-instagram"></i>
  <i className="social-icon fas fa-envelope"></i>
  <p>© Copyright 2023 MediCare</p>
</div>
</footer>
    </div>
  )
}

export default LandingPage