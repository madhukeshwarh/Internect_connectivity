function checkInternetConnection() {
    var statusElement = document.getElementById('status');
  
    if (navigator.onLine) {
      statusElement.textContent = 'Internet connection available.';
      statusElement.classList.add('connected'); // Add connected class
      statusElement.classList.remove('disconnected'); // Remove disconnected class
    } else {
      statusElement.textContent = 'Internet connection not available.';
      statusElement.classList.add('disconnected'); // Add disconnected class
      statusElement.classList.remove('connected'); // Remove connected class
    }
  }
  
  // Check internet connection status when the page loads
  window.onload = checkInternetConnection;
  
  // Check internet connection status whenever it changes
  window.addEventListener('online', checkInternetConnection);
  window.addEventListener('offline', checkInternetConnection);
  