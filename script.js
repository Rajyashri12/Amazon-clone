// Search button functionality
document.querySelector(".search-icon").addEventListener("click", () => {
    const input = document.querySelector(".search-input").value.trim();
    if (input) {
        alert(`Searching for: ${input}`);
    } else {
        alert("Please enter a product name to search.");
    }
});

// Back to top functionality
document.querySelector(".foot-panel").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Redirect link for Amazon India (hero section)
document.querySelector(".hero-msg a").addEventListener("click", () => {
    window.location.href = "https://www.amazon.in";
});

// Delivery section click handler
document.querySelector(".nav-address").addEventListener("click", () => {
    alert("Set your delivery location.");
});

// Cart click simulation
document.querySelector(".nav-cart").addEventListener("click", () => {
    alert("Cart is currently empty!");
});
