// main.js

// Main application initialization
function initApp() {
    console.log('Application Initialized');
    setupEventListeners();
}

// Setting up event listeners
function setupEventListeners() {
    document.getElementById('myButton').addEventListener('click', function() {
        console.log('Button clicked!');
    });
}

// Initializing the application
window.onload = initApp;