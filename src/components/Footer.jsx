import React from 'react'
import * as Fa  from 'react-icons/fa'
import MailSub from './MailSub'

const Footer = () => {
  const github = 'https://www.github.com/accoladesio'
  const twitter = 'https://www.twitter.com/accoladesio'
  const instagram = 'https://www.instagram.com/accoladesio'
  return (
    <footer class="footer">
      <MailSub />

      <Fa.FaStar className='star star--2'/>
      <Fa.FaStar className='star star--3'/>
      <Fa.FaEthereum className='star star--1'/>
      <Fa.FaEthereum className='star star--4'/>
      <Fa.FaEthereum className='star star--5'/>

      <a href="#home"><Fa.FaChevronUp className='star star--6'/></a>
    <div class="container grid grid--footer">
      
    <nav class="nav-col">
        <p class="footer-heading">Contact Us</p>
        <ul class="footer-nav">
          <li><p class="address">
            123 Leroid St., 2nd Floor, Norwich, UK.
          </p></li>
          <li><a class="footer-link" href="tel:+2348089087240">+234-808-908-7240</a
            ></li>
          <li><a class="footer-link" href="mailto:ononobip@gmail.com"
              >hello@cryptrack.com</a
            ></li>
        </ul>
      </nav>


      <nav class="nav-col">
        <p class="footer-heading">Account</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">Create account</a></li>
          <li><a class="footer-link" href="#">Sign in</a></li>
          <li><a class="footer-link" href="#">iOS app</a></li>
          <li><a class="footer-link" href="#">Android app</a></li>
        </ul>
      </nav>



      
      <nav class="nav-col">
        <p class="footer-heading">Company</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">About CrypTrack.io</a></li>
          <li><a class="footer-link" href="#">For Business</a></li>
          <li><a class="footer-link" href="#">Partners</a></li>
          <li><a class="footer-link" href="#">Careers</a></li>
        </ul>
      </nav>

      <nav class="nav-col">
        <p class="footer-heading">Resources</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">Help center</a></li>
          <li><a class="footer-link" href="#">Privacy & terms</a></li>
        </ul>
      </nav>
    </div>
    <div class="logo-col">
        <a href="#" class="footer-logo">
          
        </a>

        <ul class="social-links">
          <li>
            <a class="footer-link" href={github} target='_blank'
              ><Fa.FaGithub className='social-icon'/> </a>
          </li>
          <li>
            <a class="footer-link" href={instagram} target='_blank'
              ><Fa.FaInstagram className='social-icon'/> </a>
          </li>
          <li>
            <a class="footer-link" href={twitter} target="_blank"
              ><Fa.FaTwitter className='social-icon'/> </a>
          </li>
        </ul>

        <p class="copyright">
          Copyright &copy; <span class="year">2023</span> by AccoladesIO for CrypTrack, Inc.
          All rights reserved.
        </p>
      </div>
      
  </footer>
  )
}

export default Footer