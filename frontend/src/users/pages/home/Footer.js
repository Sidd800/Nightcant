import React from 'react'
import './footer.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'

export default function Footer() {
  return (
    <div>
        <footer className='footer'>
          <div className='container'>
              <div className="row">
                  <div className="footer-col">
                      <h4>Contact Us</h4>
                      <ul className="non-bullets">
                          <li className="selected-list-items">+91 xxxxxxxxxx</li>
                          <li className="selected-list-items">+91 xxxxxxxxxx</li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Team Members</h4>
                      <ul className="non-bullets">
                          <li className="selected-list-items">Vedant Upadhyay</li>
                          <li className="selected-list-items">Sanidhya Baheti</li>
                          <li className="selected-list-items">Yash Baghel</li>
                          <li className="selected-list-items">Siddharth Agrawaal</li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Mentors</h4>
                      <ul className="non-bullets">
                          <li className="selected-list-items">Aryan Yadav</li>
                          <li className="selected-list-items">Omkar Mangesh Shirgaonkar</li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Follow us</h4>
                      <div className="social-links">
                          <a href="#"><i className="fab fa-facebook-f"></i></a>
                          <a href="#"><i className="fab fa-twitter"></i></a>
                          <a href="#"><i className="fab fa-instagram"></i></a>
                      </div>
                  </div>
              </div>
          </div>
        </footer>
      </div>
  )
}
