let div = document.createElement('div');
div.innerText = 'Thanks For Watching!';
div.style.color = 'red';
div.style.backgroundColor = 'yellow';

div.style.padding = '6px';
div.style.borderRadius = '5px';
div.style.outline = '2.5px solid black';
div.style.fontSize = '24px';
div.style.fontWeight = 'bold';

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.width = '100%';

document.body.appendChild(div);