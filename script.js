const quotes = [
    "Believe you can and you're halfway there.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it.","Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.", "Start where you are. Use what you have. Do what you can.",
    "Act as if what you do makes a difference. It does.","Don't limit your challenges. Challenge your limits.",
    "Everything you’ve ever wanted is on the other side of fear.", "It always seems impossible until it's done.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.", "You miss 100% of the shots you don’t take.",
    "Hardships often prepare ordinary people for an extraordinary destiny.", "Discipline is the bridge between goals and accomplishment.",
    "Little by little, a little becomes a lot.", "Opportunities don't happen. You create them.",  "The only limit to our realization of tomorrow is our doubts of today.",
    "Work hard in silence, let success be your noise."
  ];
  
  function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = quote;
  }

  function copyQuote() {
    const quote = document.getElementById("quote").textContent;
    navigator.clipboard.writeText(quote)
    .then(() => showMessage("Quote copied to clipboard!"))
    .catch(() => showMessage("Failed to copy quote."));

  }

  function showMessage(text) {
    const message = document.getElementById("message");
    message.textContent = text;
    message.className = "message show";
    setTimeout(() => {
      message.className = "message";
    }, 3000);
  }

  document.getElementById("suggestForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent the redirect
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch("https://formspree.io/f/xwpogngq", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        showMessage("Thank you for your suggestion!");
        form.reset();
      } else {
        response.json().then(data => {
          showMessage(data.error || "Oops! Something went wrong.");
        });
      }
    })
    .catch(error => {
      showMessage("Oops! Submission failed.");
    });
  });
  
  function showMessage(text) {
    const messageBox = document.getElementById("message");
    messageBox.textContent = text;
    messageBox.classList.add("show");
    setTimeout(() => {
      messageBox.classList.remove("show");
    }, 4000);
  }
  
  
  
  
  
  
  
  