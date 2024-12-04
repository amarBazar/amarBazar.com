// Select the elements
const bankRadio = document.getElementById('bank');
const cashOnDeliveryRadio = document.getElementById('cashOnDelivery');
const fullPayCondition = document.querySelector('.payment-condition.full-pay');
const advancePayCondition = document.querySelector('.payment-condition.advance-pay'); // Corrected selector

// Function to update the display
function updatePaymentCondition() {
  if (bankRadio.checked) {
    fullPayCondition.style.display = 'block';
    advancePayCondition.style.display = 'none';
  } else if (cashOnDeliveryRadio.checked) {
    fullPayCondition.style.display = 'none';
    advancePayCondition.style.display = 'block';
  }
}

// Attach event listeners to the radio buttons
bankRadio.addEventListener('change', updatePaymentCondition);
cashOnDeliveryRadio.addEventListener('change', updatePaymentCondition);

// Initial state
updatePaymentCondition();




document.addEventListener('DOMContentLoaded', () => {
  // ** District and Police Station Selector **
  document.getElementById("district").addEventListener("change", function () {
      const district = this.value.toLowerCase().replace(/\s+/g, '-'); // Format value for class compatibility
      const policeStationOptions = document.querySelectorAll("#police-station option");

      // Hide all options first
      policeStationOptions.forEach(option => option.style.display = "none");

      // Show relevant options
      const matchingOptions = document.querySelectorAll(`.thana-option.${district}-thana`);
      matchingOptions.forEach(option => option.style.display = "block");
  });

  // ** Price, Quantity, Subtotal, and Total Calculation **
  const priceElement = document.querySelector(".price");
  const quantityElement = document.querySelector(".quantity input");
  const subtotalElement = document.querySelector(".subtotal span");
  const shippingElement = document.querySelector(".shipping span");
  const totalElement = document.querySelector(".total input");

  if (priceElement && quantityElement && subtotalElement && shippingElement && totalElement) {
      const parseNumber = value => parseFloat(value.replace(/[^\d.-]/g, "")) || 0;

      const updateTotals = () => {
          const price = parseNumber(priceElement.textContent);
          const quantity = parseInt(quantityElement.value, 10) || 0;
          const shipping = parseNumber(shippingElement.textContent);
          const subtotal = price * quantity;
          const total = subtotal + shipping;

          subtotalElement.textContent = `৳ ${subtotal.toFixed(2)}`;
          totalElement.value = `৳ ${total.toFixed(2)}`;
      };

      updateTotals(); // Initial calculation
      quantityElement.addEventListener("input", updateTotals);
  } else {
      console.error("One or more elements required for price calculation are missing.");
  }


  // ** Place Order Button Functionality **
  const placeOrderBtn = document.querySelector('.btn.place-order-btn');
  if (placeOrderBtn) {
      placeOrderBtn.addEventListener('click', () => {
          const totalInput = document.querySelector('.total input');
          const paymentOut = document.querySelector('.payment-out');

          if (totalInput && paymentOut) {
              paymentOut.textContent = totalInput.value;
          } else {
              console.error('Missing total input or payment output element.');
          }
      });
  }

  // ** Copy Button Functionality **
  const copyBtn = document.querySelector('.btn.copy-btn');
  if (copyBtn) {
      copyBtn.addEventListener('click', () => {
          const numberElement = document.querySelector('.number');
          if (numberElement) {
              const numberValue = numberElement.textContent.trim();
              if (numberValue) {
                  navigator.clipboard.writeText(numberValue)
                      .then(() => {
                          const originalText = copyBtn.textContent || 'Copy';
                          copyBtn.textContent = 'Copied!';
                          copyBtn.disabled = true;

                          setTimeout(() => {
                              copyBtn.textContent = originalText;
                              copyBtn.disabled = false;
                          }, 2000);
                      })
                      .catch(err => {
                          console.error('Failed to copy text:', err);
                      });
              } else {
                  console.error('No text available to copy.');
              }
          } else {
              console.error('Target element for copy not found.');
          }
      });
  }

  // ** Google Script Form Submission **
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("order-place");
  const loader = document.getElementById("loader");

  if (form && msg && loader) {
      form.addEventListener('submit', e => {
          e.preventDefault();
          loader.style.display = "block";

          fetch('https://script.google.com/macros/s/AKfycbzNvZ4sz0A5S5aG_x_ukN10TjoJiSTgnMezuft5EI83I_NO7RIgj5vMEismtHyiUcXi/exec', {
              method: 'POST',
              body: new FormData(form)
          })
              .then(response => {
                  console.log('Success!', response);
                  setTimeout(() => {
                      loader.style.display = "none";
                      msg.innerHTML = "Order Confirmed &#10004;";
                      form.reset();
                  }, 5000);
              })
              .catch(error => {
                  console.error('Error!', error.message);
                  loader.style.display = "none";
              });
      });
  }

  // ** Place Order Animation Button **
  const placeOrderAnimatedBtn = document.getElementById('place-order');
  if (placeOrderAnimatedBtn) {
      placeOrderAnimatedBtn.addEventListener('click', function clickHandler(e) {
          e.preventDefault();
          this.removeEventListener('click', clickHandler);

          setTimeout(() => {
              this.classList.add('loading');
          }, 125);

          setTimeout(() => {
              this.classList.remove('loading');
              this.classList.add('ready');
          }, 4300);
      });
  }
});


window.addEventListener('beforeunload', (event) => {
    // Display an alert when the page is refreshed or closed
    alert('You are refreshing or leaving the page!');
    // Note: The alert may not appear as expected depending on the browser
    event.preventDefault();
});