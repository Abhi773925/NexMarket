function goToHomePage() {
    window.location.href = "index.html"; // Replace index.html with your home page URL
  }
  
  // Generate a random order ID
  document.getElementById("orderID").innerText = Math.floor(Math.random() * 1000000000);
  
  // Calculate estimated delivery date (example: 2 days from today)
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 2); // Change 2 to your desired number of days
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("deliveryDate").innerText = deliveryDate.toLocaleDateString('en-US', options);
  