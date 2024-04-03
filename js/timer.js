let timeLeft;

// Écouter les messages envoyés par le fichier principal
onmessage = function(event) {
    const message = event.data;
    if (message.action === 'start') {
        // Démarrer le timer avec la valeur initiale de timeLeft
        timeLeft = message.timeLeft;
        startTimer();
    }
};

// Fonction pour démarrer le timer
function startTimer() {
    let timerInterval = setInterval(() => {
        if (timeLeft === 0) {
            postMessage(timeLeft);
            clearInterval(timerInterval); // Arrêter le timer lorsque le temps est écoulé
            // Autres actions à effectuer lorsque le temps est écoulé...
        } else {
            postMessage(timeLeft); // Envoyer timeLeft au compteur
            timeLeft--;
        }
    }, 1000);
}