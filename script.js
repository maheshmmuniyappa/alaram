document.addEventListener("DOMContentLoaded", function() {
    const alarmListElement = document.getElementById("alarmList");
    const deleteButton = document.getElementById("deleteButton");
    const setButton = document.getElementById("setButton");
    const alarmTimeInput = document.getElementById("alarmTime");
    const clockElement = document.getElementById("clock");
  
    // Sample initial data
    let alarms = ["08:00 AM", "12:30 PM", "04:45 PM"];
  
    function displayAlarms() {
      alarmListElement.innerHTML = alarms.map((alarm, index) => `<li>${alarm} <button class="delete-btn">Delete</button></li>`).join("");
    }
  
    function deleteAlarm(index) {
      alarms.splice(index, 1);
      displayAlarms();
    }
  
    function setAlarm() {
      const newAlarmTime = alarmTimeInput.value;
      if (newAlarmTime && !alarms.includes(newAlarmTime)) {
        alarms.push(newAlarmTime);
        displayAlarms();
        alarmTimeInput.value = ""; // Clear the input after setting the alarm
      }
    }
  
    setButton.addEventListener("click", setAlarm);
  
    deleteButton.addEventListener("click", function() {
      if (alarms.length > 0) {
        deleteAlarm(0); // Delete the first alarm for demonstration purposes
      }
    });
  
    // Event delegation for delete buttons
    alarmListElement.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentNode;
        const index = Array.from(listItem.parentNode.children).indexOf(listItem);
        deleteAlarm(index);
      }
    });
  
    displayAlarms();
  
    // Clock display
    function updateClock() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const currentTime = `${hours}:${minutes}:${seconds}`;
      clockElement.textContent = currentTime;
    }
  
    // Update the clock every second
    setInterval(updateClock, 1000);
  });
  