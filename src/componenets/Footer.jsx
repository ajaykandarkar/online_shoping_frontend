import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <footer class="footer bg-black text-white pt-5 pb-3">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h5>Exclusive</h5>
                <p class="subscribe-text">Subscribe</p>
                <p>Get 10% off your first order</p>
                <div class="input-group">
                    <input type="email" class="form-control" placeholder="Enter your email"/>
                    <button class="btn btn-outline-light">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>

            <div class="col-md-3">
                <h5>Support</h5>
                <p>111 Bijoy sarani, Dhaka, <br/> DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>

            <div class="col-md-2">
                <h5>Account</h5>
                <ul class="list-unstyled">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Login / Register</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>

         
            <div class="col-md-2">
                <h5>Quick Link</h5>
                <ul class="list-unstyled">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="col-md-2">
                <h5>Download App</h5>
                <p>Save $3 with App New User Only</p>
                <div class="d-flex gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                         alt="Google Play" class="store-badge"/>
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                         alt="App Store" class="store-badge"/>
                </div>
                <div class="social-icons mt-3">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <hr class="footer-line"/>
        <p class="text-center">&copy; Copyright Rimel 2022. All rights reserved</p>
    </div>
</footer>

  )
}
