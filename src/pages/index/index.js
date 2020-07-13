import '../../components/plugins';
import './index.scss';
import Menu from '../../components/menu';

const pandaMenu = new Menu({
  title: 'Panda\'s menu',
  items: [{
    text: 'Eggs',
    href: '#eggs',
  }, {
    text: 'Meat',
    href: '#meat',
  }, {
    text: '99% of food - bamboo',
    href: '#bamboo',
  }],
});
document.querySelector('h1').insertAdjacentElement('afterend', pandaMenu.elem);
console.log('in index.js');
