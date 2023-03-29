const preLoader = document.querySelector('#preLoader');

window.addEventListener('load', function () {
  preLoader.classList.add('hidden');
});

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const alerts = document.querySelector('#alert');
const list = document.querySelector('#list');
const messages = document.querySelector('#messages');
let data = [];

const dates = new Date();
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const year = dates.getFullYear();
const date = dates.getDate();
console.log(dates.getDate());
const time = `${months[dates.getMonth()]}, ${date} ${year}`;
// console.log(time);

function dynamicElement(content, time) {
  return ` <div
            class="flex justify-between pt-4 pb-4 items-center bg-gray-800 w-[380px] h-auto shadow-2xl shadow-blue-900 rounded-2xl md:w-[650px] mb-2 hover:bg-gray-700 duration-500"
          >
            <h2
              class="text-white font-serif text-xl tracking-widest ml-4 overflow-y-hidden overflow-x-hidden"
            >
              ${content}
            </h2>
            <h2 class="text-white font-serif">${time}</h2>
            <div id="operation" class="text-white">
              <i
                class="fa-xl fa-solid fa-pen-to-square mr-2 cursor-pointer text-green-600 hover:text-green-800 duration-500 md:fa-2xl"
                id="edit"
              ></i>

              <i
                class="fa-xl fa-solid fa-trash mr-4 cursor-pointer text-red-600 hover:text-red-800 duration-500 md:mr-8 md:fa-2xl"
                id="delete"
              ></i>
            </div>
          </div>`;
}

function handlingAlert() {
  alerts.classList.add('hidden');
}
btn.addEventListener('click', function (e) {
  e.preventDefault();
  let content = input.value;

  let message = '';
  // let localData=[];
  if (localStorage.getItem('data')) {
    data = JSON.parse(localStorage.getItem('data'));
  } else {
    data = [];
  }

  if (content) {
    // we are taking milliseconds as an ID
    const id = dates.getMilliseconds() * Math.floor(Math.random() * 10000);

    // pushing data to the array
    data.push({ id: id, content: `${content}`, time: time });
    // setting data into the local storage
    localStorage.setItem('data', JSON.stringify(data));

    // adding single record at a time into the view
    list.innerHTML += dynamicElement(content, time);
    // alert notofication
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
});

const localDatas = JSON.parse(localStorage.getItem('data'));

window.addEventListener('load', function () {
  localDatas.map(function (record) {
    list.innerHTML += dynamicElement(record.content, record.time);
    // console.log(record);
  });
});

// console.log(localDatas);

// if (localDatas) {
//   localDatas.map(function (localData) {

//   });
// }
