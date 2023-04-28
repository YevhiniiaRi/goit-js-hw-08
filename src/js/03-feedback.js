import throttle from 'lodash.throttle';

// Get the form and its elements
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

// Set the key for the localStorage object
const storageKey = 'feedback-form-state';

// Function to update the localStorage object
const updateStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
}, 500);

// Add input event listeners to the email and message inputs
emailInput.addEventListener('input', updateStorage);
messageInput.addEventListener('input', updateStorage);

// Function to load the form state from the localStorage object
const loadFormState = () => {
  const state = JSON.parse(localStorage.getItem(storageKey));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

// Load the form state on page load
loadFormState();

// Function to handle form submission
const handleSubmit = event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the current form state
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // Clear the localStorage object and form fields
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageInput.value = '';

  // Log the form state to the console
  console.log(state);
};

// Add submit event listener to the form
feedbackForm.addEventListener('submit', handleSubmit);
