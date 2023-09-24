const html = `<div id="header">
        <h1>Sabores Venezolanos</h1>
        <ul>
          <li><a id="home" href="#">Home</a></li>
          <li><a  id="menu" href="#">Menu</a></li>
          <li><a class="active" id="contact" href="#">Contact</a></li>                       
        </ul>
      </div>
      <div id="main">
        <h2>Location</h2>
        <div class="location">
          <div>
            <img src="/dist/imgs/snapshot.png" alt="location" />
          </div>
          <div class="para">
          <p>Calle de los Puertecitos 23, 28003 Madrid</p>
          <p>Tel: +34 123 456 789</p>
          <p>www.saboresvenezolanos.com</p>
          </div>
          <p>Copyright © 2020</p>
        </div>
      </div>`;
export default function locationPrinter() {
  return html;
}
