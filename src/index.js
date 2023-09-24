import './style.css';
import printer from './content';
import menuPrinter from './menu';
import locationPrinter from './location';

const element = document.getElementById('content');

element.innerHTML = printer();
// HACER FUNCION

element.addEventListener('click', (e) => {
  const ele = e.target.id;
  if (ele === 'home') {
    element.innerHTML = printer();
  }
  if (ele === 'menu') {
    element.innerHTML = menuPrinter();
  }

  if (ele === 'contact') {
    element.innerHTML = locationPrinter();
  }
});
