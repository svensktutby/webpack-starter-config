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
$('<h2 />').text('Webpack Start').appendTo('body');
console.log('in index.js');
