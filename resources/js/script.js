function updateCountdown() {
  const startDate = new Date("2024-12-01T00:00:00"); // Replace with your start date
  const endDate = new Date("2024-12-31T00:00:00");   // Replace with your end date
  const now = new Date();

  // If the countdown has ended
  if (now >= endDate) {
      document.getElementById('day').textContent = "00";
      document.getElementById('hour').textContent = "00";
      document.getElementById('minute').textContent = "00";
      document.getElementById('second').textContent = "00";
      return; // Stop the countdown
  }

  // Calculate the time remaining
  const totalSeconds = Math.floor((endDate - now) / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  // Update the DOM
  document.getElementById('day').textContent = days.toString().padStart(2, '0');
  document.getElementById('hour').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minute').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('second').textContent = seconds.toString().padStart(2, '0');
}

// Run the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize immediately

//--------------------------------------------------------------------------------------
// category box slider
let currentSlide = 0; // Track the current slide
const itemsPerSlide = 6; // Number of items per slide
const categoryBox = document.querySelector('.category-box');
const circles = document.querySelectorAll('.circles span');

// Calculate the scroll distance for one slide
const itemWidth = categoryBox.scrollWidth / categoryBox.children.length;
const slideWidth = itemWidth * itemsPerSlide;

function updateSlide() {
    // Scroll to the position of the current slide
    categoryBox.scrollLeft = currentSlide * slideWidth;

    // Update the active circle
    circles.forEach((circle, index) => {
        if (index === currentSlide) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}

function slidLeft() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

function slidRight() {
    if (currentSlide < Math.ceil(categoryBox.children.length / itemsPerSlide) - 1) {
        currentSlide++;
        updateSlide();
    }
}

// Initialize the first circle as active
updateSlide();
// ---------------------------------------------------------------------------------------------
const trigger = document.querySelector('.open-profile-menu');
const popover = document.querySelector('.profile-menu');

// Function to toggle popover visibility
const togglePopover = () => {
  const isVisible = popover.style.display === 'block';
  popover.style.display = isVisible ? 'none' : 'block';
};

// Function to close the popover
const closePopover = (event) => {
  if (
    event.type === 'scroll' || // Close on scroll
    (event.type === 'click' && !popover.contains(event.target) && !trigger.contains(event.target)) // Close if clicking outside
  ) {
    popover.style.display = 'none';
  }
};

// Event listeners
trigger.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent triggering the close event
  togglePopover();
});

document.addEventListener('click', closePopover);
document.addEventListener('scroll', closePopover);
//------------------------------------------------------------------------