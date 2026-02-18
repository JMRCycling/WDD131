// Credit Card Form Validation

function displayError(msg) {
  document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
  // For demo purposes, only accept this specific number
  return number === '1234123412341234';
}

function formatCardNumber(input) {
  // Remove non-digits
  let value = input.value.replace(/\D/g, '');
  input.value = value;
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  displayError('');

  // Validate card number
  const cardNumber = document.querySelector('#creditCardNumber');
  const cardNum = cardNumber.value.replace(/\s/g, '').trim();
  
  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
  }

  // Validate expiration date
  const expYear = Number(document.querySelector('#year').value);
  const expMonth = Number(document.querySelector('#month').value);
  const currentDate = new Date();

  if (!expMonth || !expYear) {
    errorMsg += 'Please enter expiration date\n';
  } else if (
    2000 + expYear < currentDate.getFullYear() ||
    (2000 + expYear === currentDate.getFullYear() && expMonth <= currentDate.getMonth())
  ) {
    errorMsg += 'Card is expired\n';
  }

  // Validate CVV
  const cvv = document.querySelector('#cvv').value.trim();
  if (!/^\d{3,4}$/.test(cvv)) {
    errorMsg += 'CVV must be 3 or 4 digits\n';
  }

  // Validate card holder
  const cardHolder = document.querySelector('#cardHolder').value.trim();
  if (!cardHolder) {
    errorMsg += 'Please enter card holder name\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  // Success: show confirmation message
  const formContainer = document.getElementById('checkoutForm');
  formContainer.innerHTML = '<h2 style="text-align: center;">Thank you for your purchase.</h2>';
}

// Event listeners
document.querySelector('#checkoutForm').addEventListener('submit', submitHandler);

// Format card number as user types
document.querySelector('#creditCardNumber').addEventListener('input', function(e) {
  formatCardNumber(e.target);
});