import confetti from "https://cdn.skypack.dev/canvas-confetti"

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("title").textContent = "🎇Let's do this!🥳"
      document.getElementById("activity").textContent = `🎉${data.activity}🎉`
    })
    document.querySelector("main").style.background = "linear-gradient(to bottom, #8A2387, #E94057, #F27121)"
    confetti()
})