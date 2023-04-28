import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';

const updateStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
}, 500);


emailInput.addEventListener('input', updateStorage);
messageInput.addEventListener('input', updateStorage);

const loadFormState = () => {
  const state = JSON.parse(localStorage.getItem(storageKey));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

loadFormState();

const handleSubmit = event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageInput.value = '';

  console.log(state);
};

feedbackForm.addEventListener('submit', handleSubmit);
