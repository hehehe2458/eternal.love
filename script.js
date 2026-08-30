const romanticReminders = [
  "I love you, through every quiet and difficult moment.",
  "You are my absolute favorite person, no matter what.",
  "You don't have to carry it all alone. I'm right here holding your hand.",
  "Your peace and happiness mean everything to me.",
  "Take all the time you need. My heart isn't going anywhere.",
  "No matter how heavy things feel, you are deeply loved.",
  "I believe in you, even when you find it hard to believe in yourself."
];

const reminderDisplay = document.getElementById('reminder-display');
const reminderBtn = document.getElementById('reminder-btn');

reminderBtn.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * romanticReminders.length);
  
  reminderDisplay.style.opacity = '0';
  
  setTimeout(() => {
    reminderDisplay.textContent = `"${romanticReminders[randomIndex]}"`;
    reminderDisplay.style.opacity = '1';
  }, 200);
});