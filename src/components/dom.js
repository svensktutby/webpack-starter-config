import kitty from '../assets/images/kitty.jpg';
import reactImage from '../assets/icons/react.svg';
import './dom.scss';

export default (text = 'Hello, dude! 🕺🏼') => {
  const element = document.createElement('div');
  const greeting = element.cloneNode();
  const imgWrapper = element.cloneNode();
  imgWrapper.className = 'kitty-wrapper';
  const img = document.createElement('img');
  img.className = 'kitty';
  img.src = kitty;
  img.alt = 'Kitty';

  greeting.innerHTML = text;
  imgWrapper.append(img);
  element.append(greeting);
  element.append(imgWrapper);

  const svgTemplate = `
    <svg class="icon icon--react" width="200" height="200">
      <use xlink:href="${ reactImage }"></use>
    </svg>
  `;

  img.onclick = () => {
    imgWrapper.innerHTML = svgTemplate;
  };

  greeting.addEventListener('click', async () => {
    greeting.innerHTML = 'Loading...';

    const result = await import(/* webpackChunkName: "lazyLoadedText" */ './lazyLoadedText');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    greeting.innerHTML = result.default;
  });

  return element;
};
