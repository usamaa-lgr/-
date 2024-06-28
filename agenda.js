document.addEventListener("DOMContentLoaded", function () {
  const eventsList = document.getElementById("eventsList");
  const addEventBtn = document.getElementById("addEventBtn");

  addEventBtn.addEventListener("click", function () {
    const eventName = prompt("Nom de l'événement :");
    if (eventName) {
      const eventTime = prompt("Date et heure de l'événement :");
      if (eventTime) {
        const eventLocation = prompt("Lieu de l'événement :");
        if (eventLocation) {
          const eventHTML = `
                        <div class="event">
                            <h3>${eventName}</h3>
                            <p>Date et heure : ${eventTime}</p>
                            <p>Lieu : ${eventLocation}</p>
                            <button class="deleteBtn">Supprimer</button>
                        </div>
                    `;
          eventsList.insertAdjacentHTML("beforeend", eventHTML);
          saveEvents();
        } else {
          alert("Veuillez saisir un lieu pour l'événement.");
        }
      } else {
        alert("Veuillez saisir une date et une heure pour l'événement.");
      }
    } else {
      alert("Veuillez saisir un nom pour l'événement.");
    }
  });

  // Supprimer un événement
  eventsList.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
      e.target.parentElement.remove();
      saveEvents();
    }
  });

  // Charger les événements depuis le stockage local
  loadEvents();

  function saveEvents() {
    const eventsHTML = eventsList.innerHTML;
    localStorage.setItem("agendaEvents", eventsHTML);
  }

  function loadEvents() {
    const eventsHTML = localStorage.getItem("agendaEvents");
    if (eventsHTML) {
      eventsList.innerHTML = eventsHTML;
    }
  }
});
