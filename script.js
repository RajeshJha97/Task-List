const preLoader = document.querySelector('#preLoader');

window.addEventListener('load', function () {
  preLoader.classList.add('hidden');
});

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const alerts = document.querySelector('#alert');
const messages = document.querySelector('#messages');
let data = [];
const date = new Date();

function handlingAlert() {
  alerts.classList.add('hidden');
}
btn.addEventListener('click', function (e) {
  e.preventDefault();
  let content = input.value;
  console.log(input.value);
  let message = '';

  if (content) {
    console.log(content);
    const id = date.getMilliseconds() * Math.floor(Math.random() * 10000);
    data.push({ id: id, content: `${content}` });
    // localStorage.setItem('data', JSON.stringify({ ...allData, data }));
    message = `ToDo's Added`;
    alerts.classList.remove('hidden');
    messages.textContent = message;
    alerts.classList.add('bg-green-800');
    setTimeout(handlingAlert, 2000);
  } else {
    // debugger;
    message = 'Input is empty';
    alerts.classList.remove('hidden');
    messages.textContent = message;
    alerts.classList.add('bg-red-800');
    // debugger;
    setTimeout(handlingAlert, 2000);
  }
  input.value = '';

  console.log(localStorage.getItem('data'));
});
