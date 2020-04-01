// import '@babel/polyfill';
import 'normalize.css';
import './about.scss';
import Menu from '../../components/menu';

const myMenu = new Menu({
  title: 'My menu',
  items: [{
    text: 'Sausage',
    href: '#sausage',
  }, {
    text: 'Cheese',
    href: '#cheese',
  }, {
    text: 'Beer',
    href: '#beer',
  }],
});
document.querySelector('h1').insertAdjacentElement('afterend', myMenu.elem);
console.log('in about.js');