// found resuable header code from https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!-- html portion of the top navigation bar; concept taken from w3schools -->
      <div class="navbar">
        <div class="navlink">
          <a href="index.html">Home</a>
          <a class="placeholder">|</a>
          <a href="mission.html">Mission</a>
          <a class="placeholder">|</a>
          <div class="dropdown">
              <button class="dropbtn">Computer Science Projects
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
              <a href="https://github.com/anandkrishnan108?tab=repositories" target="_blank">Github Profile</a>
                  <a href="https://krishnan5826.github.io" target="_blank">My first website (created when I was 14)</a>
                  <a href="https://vegan-me.github.io/vegan-me/" target="_blank">VeganMe</a>
                  <a href="https://www.youtube.com/watch?v=OEzaNsuPNds" target="_blank">UIUC Landmarks App (CS 124 Project)</a>
                  <a href="https://rpubs.com/akrishx/t20wc" target="_blank">ICC T20 World Cup 2022 Team of the Tournament (R Dashboard)</a>
              </div>
          </div>
          <a class="placeholder">|</a>
          <a href="research.html">Research</a>
          <a class="placeholder">|</a>
          <div class="dropdown">
              <button class="dropbtn">Soccer
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                  <a href="soccer.html">My playing career</a>
                  <a href="referee.html">Refereeing</a>
                  <a href="topsoccer.html">Volunteering</a>
                  </div>
          </div>
          <a class="placeholder">|</a>
          <a href="travel.html">Travel</a>
          <a class="placeholder">|</a>
          <a href="AnandKrishnan_Resume.pdf" target="_blank" download>Résumé</a>
          <a class="placeholder">|</a>
          <div class="dropdown">
              <button class="dropbtn">Contact
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                  <a href="mailto:akrishx@gmail.com">Email: akrishx@gmail.com</a>
                  <a href="https://www.linkedin.com/in/anand-krishnan-0a62621ab/" target="_blank">LinkedIn</a>
                  <a href="https://www.instagram.com/akrishx/" target="_blank">Insta: akrishx</a>
                  <a href="#">Snap: akrishx5</a>
              </div>
          </div>
        </div>  
      </div>
      <!-- end of navigation  bar code -->
      `;
    }
  }
  
  customElements.define('header-component', Header);
