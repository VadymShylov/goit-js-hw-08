import throttle from 'lodash.throttle';
const formElement = document.querySelector('.feedback-form');

let dataForm = {};

const messageElement = () => {
  const message = localStorage.getItem('feedback-form-state');
  dataForm  = JSON.parse(message) ?? {};
  const formDataKeys = Object.keys(dataForm );

  if (message) {
    formDataKeys.map(key => {
      formElement.elements[key].value = dataForm [key];
    });
  }
};

const inputForm = event => {
  dataForm [event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm ));
};

const submitForm = event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(dataForm );
};

messageElement();
formElement.addEventListener('input', throttle(inputForm, 500));
formElement.addEventListener('submit', submitForm);
