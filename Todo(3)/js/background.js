const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = 'img/0.jpeg','img/1.jpeg';
//백틱기호 못써서 바꿈
bgImage.alt = 'bgimg';
// `img/${chosenImage}`;

document.body.appendChild(bgImage);
