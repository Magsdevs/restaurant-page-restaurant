const html = `<div id="header">
        <h1>Sabores Venezolanos</h1>
        <ul>
          <li><a id="home" href="#">Home</a></li>
          <li><a class="active" id="menu" href="#">Menu</a></li>
          <li><a id="contact" href="#">Contact</a></li>
        </ul>
      </div>
      <div id="main">
        <h2>Menu</h2>
      <div class="menu-container">
        <div class="card-menu">
          <h3>Arepas</h3>
          <img src="./imgs/840_560.jpg" alt="arepas" />
          <p>
            a flat, round, unleavened patty of soaked, ground kernels of maize,
            or—more frequently nowadays—maize meal or maize flour
          </p>
        </div>
        <div class="card-menu">
          <h3>Arepas</h3>
          <img src="./imgs/840_560.jpg" alt="arepas" />
          <p>
            a flat, round, unleavened patty of soaked, ground kernels of maize,
            or—more frequently nowadays—maize meal or maize flour
          </p>
        </div>
        <div class="card-menu">
          <h3>Arepas</h3>
          <img src="./imgs/840_560.jpg" alt="arepas" />
          <p>
            a flat, round, unleavened patty of soaked, ground kernels of maize,
            or—more frequently nowadays—maize meal or maize flour
          </p>
        </div>
        <div class="card-menu">
          <h3>Cachapas</h3>
          <img
            src="./imgs/presentacion-principal-de-las-cachapas-venezolanas.jpg"
            alt="cachapa"
          />
          <p>
            Cachapa is a thin pancake made with ground fresh corn, cheese, and
            panela (or sugar), cooked in a budare (a clay or iron plate).
          </p>
        </div>
        <div class="card-menu">
          <h3>Pabellón</h3>
          <img src="./imgs/venezuelan-shredded-beef.jpg" alt="pabellon" />
          <p>
            It is a plate of rice, shredded beef in stew and stewed black beans.
          </p>
        </div>
        <div class="card-menu">
          <h3>Patacón</h3>
          <img
            src="./imgs/tostones_venezolanos_56794_orig.jpg"
            alt="patacon"
          />
          <p>
            this dish uses two twice-fried and smashed unripened plantains to
            contain the sandwich's fillings
          </p>
        </div>
      </div>
      </div>
      </div>`;
export default function menuPrinter() {
  return html;
}
