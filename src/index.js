import '../node_modules/normalize.css/normalize.css';
import './styles/main.scss';

import './components/javascript';

import domComponent from './components/dom';
import Button from './components/button';

const app = document.getElementById('app');
const element = domComponent();
const { btn } = new Button({ text: 'Change color' });

element.append(btn);
app.append(element);
$('.btn').addClass('jquery');

console.log(__API_URI__);
