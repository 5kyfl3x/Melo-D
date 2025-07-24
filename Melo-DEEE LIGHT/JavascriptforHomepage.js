const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const containers = document.querySelectorAll(".container");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}

function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

containers.forEach((container) => {
  const leftArrow = container.querySelector(".left_arrow");
  const rightArrow = container.querySelector(".right_arrow");
  const tablist = container.querySelector("ul");

  function manageIcons() {
    if (tablist.scrollLeft >= 20) {
      leftArrow.classList.add("active");
    } else {
      leftArrow.classList.remove("active");
    }
    let maxScrollValue = tablist.scrollWidth - tablist.clientWidth - 20;
    console.log("Scroll width: ", tablist.scrollWidth);
    console.log("Client width: ", tablist.clientWidth);

    if (tablist.scrollLeft >= maxScrollValue) {
      rightArrow.classList.remove("active");
    } else {
      rightArrow.classList.add("active");
    }
  }

  rightArrow.addEventListener("click", () => {
    tablist.scrollLeft += 200;
    manageIcons();
  });

  tablist.addEventListener("scroll", manageIcons);

  leftArrow.addEventListener("click", () => {
    tablist.scrollLeft -= 200;
    manageIcons();
  });
});

// Get the volume slider and audio elements
const volumeSlider = document.getElementById("volume-slider");
const audioElements = document.querySelectorAll("audio");
const togglePlayButtons = document.querySelectorAll(
  ".cards1, .cards2, .cards3, .cards4, .cards5, .cards6, .cards7"
);

// Function to toggle play
function togglePlay(event) {
  const card = event.target.closest("li");
  const audio = card.querySelector("audio");

  // Remove active class from previously active card
  if (currentAudio && currentAudio !== audio) {
    const previouslyActiveCard = currentAudio.closest("li");
    previouslyActiveCard
      .querySelector(
        ".cards1, .cards2, .cards3, .cards4, .cards5, .cards6, .cards7"
      )
      .classList.remove("active");

    // Pause the previously active
    // audio
    currentAudio.pause();
  }

  // Update the active state of the target element
  if (audio.classList.contains("active")) {
    audio.classList.remove("active");
  } else {
    audio.classList.add("active");
  }

  currentAudio = audio;

  // Toggle play/pause for the new audio
  if (currentAudio.paused) {
    currentAudio.play();
    event.target.classList.add("active");
  } else {
    currentAudio.pause();
    event.target.classList.remove("active");
  }
}

// Event listeners for cards
togglePlayButtons.forEach((button) => {
  button.addEventListener("click", togglePlay);
});

// Add an event listener to the volume slider
volumeSlider.addEventListener("input", () => {
  // Update the volume of each audio element
  audioElements.forEach((audio) => {
    audio.volume = volumeSlider.value / 30;
  });
});

var currentAudio = null;

// if (currentAudio.paused) {
//   currentAudio.play();
//   event.target.classList.add("active");
// } else {
//   currentAudio.pause();
//   event.target.classList.remove("active");
// }

// if (currentAudio.overlap) {
//   currentAudio.play();
//   lastAudio.pause();
//   event.target.classList.add("active");
// }

togglePlayButtons.forEach(function (button) {
  button.addEventListener("click", togglePlay);
});

// Theme switching functionality
const themeButtons = document.querySelectorAll(".settings_font button");

// Add event listeners to theme buttons
themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Theme button clicked:", button);
    const theme = button.classList[0]; // Get the theme name from button class
    console.log("Selected theme:", theme);
    setTheme(theme);
  });
});

// Set theme and save to localStorage
function setTheme(theme) {
  console.log("Setting theme:", theme);
  // Remove all theme classes
  document.body.classList.remove("normal", "vintage", "wicked");
  // Add selected theme class
  document.body.classList.add(theme);
  console.log("Current body classes:", document.body.classList);
  // Save to localStorage
  localStorage.setItem("theme", theme);
  console.log("Theme saved to localStorage:", theme);
}

// Initialize theme on page load
const savedTheme = localStorage.getItem("theme") || "normal";
console.log("Initializing theme from localStorage:", savedTheme);
setTheme(savedTheme);
