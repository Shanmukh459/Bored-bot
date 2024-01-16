import confetti from 'https://cdn.skypack.dev/canvas-confetti';

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("title").textContent = "🎇Let's do this!🥳"
      document.getElementById("activity").textContent = `🎉${data.activity}🎉`
    })
    confetti()
})