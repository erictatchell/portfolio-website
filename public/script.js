let linkedin = document.createElement('a');
let github = document.createElement('a');
let namediv = document.createElement('div');
let button = document.createElement('button');
let steamAvatar = document.createElement('img')
let clicked = false;

linkedin.textContent = 'LinkedIn';
linkedin.href = 'https://www.linkedin.com/in/etatchell/';
linkedin.target = '_blank';
linkedin.rel = 'noopener noreferrer';

github.textContent = 'GitHub';
github.href = 'https://github.com/erictatchell/';
github.target = '_blank';
github.rel = 'noopener noreferrer';

namediv.textContent = 'Eric Tatchell';

let buttonText = 'fetch aubrey steam avatar'
button.textContent = buttonText

button.addEventListener('click', async () => {
  if (clicked) return;

  clicked = true;
  button.textContent = 'loading...';

  try {
    const response = await fetch('/api/steam');

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result)

    button.textContent = 'loaded';
    steamAvatar.src = result.response.players[0].avatarmedium;

    setTimeout(() => {
      button.textContent = buttonText;
      clicked = false;
    }, 1000);

  } catch (err) {
    console.error(err);
    button.textContent = 'error';

    setTimeout(() => {
      button.textContent = buttonText;
      clicked = false;
    }, 1000);
  }
});

document.body.appendChild(namediv);
document.body.appendChild(linkedin);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(github);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(button);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(steamAvatar);