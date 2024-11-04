// faq js

// function toggleFAQ(element) {
//     const answer = element.nextElementSibling;
//     answer.style.display = answer.style.display === "block" ? "none" : "block";
// }


function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    answer.classList.toggle('open');
}

// date and time

window.onload = function() {
    const datetime = document.getElementById("datetime");
    setInterval(() => {
        const now = new Date();
        datetime.textContent = now.toLocaleString();
    }, 1000);
};

