const html = `<div id="header">
        <h1>Sabores Venezolanos</h1>
        <ul>
         <li><a class="active" id="home" href="#">Home</a></li>
          <li><a id="menu" href="#">Menu</a></li>
          <li><a id="contact" href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div id="main">
        <h2>What We Offer</h2>
        <div id="restaurant">
          <div class="restaurant-info">
            At Sabores Venezolanos, we invite you to embark on a culinary
            journey to Venezuela without leaving your city. Our restaurant is a
            vibrant and welcoming oasis where you can savor the rich and diverse
            flavors of Venezuelan cuisine. We take pride in offering an
            authentic dining experience that celebrates the traditions, culture,
            and warmth of Venezuela.
          </div>
          <div class="restaurant-hours">
            <h3>hours</h3>
            <p>Monday 11:00 - 23:00</p>
            <p>Tuesday 11:00 - 23:00</p>
            <p>Wednesday 11:00 - 23:00</p>
            <p>Thursday 11:00 - 23:00</p>
            <p>Friday 11:00 - 23:00</p>
            <p>Saturday 11:00 - 23:00</p>
            <p>Sunday 11:00 - 23:00</p>
          </div>
          <div class="location">
            <h3>location</h3>
            <p>Madrid, Calle de los Puertecitos 23</p>
          </div>
        </div>
      </div>`;
export default function printer() {
  return html;
}
