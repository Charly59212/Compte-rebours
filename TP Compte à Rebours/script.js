let time;  //Variable de décompte du compte à rebours
let count;  //Variable de stockage du timer

// Décompte du compte à rebours en secondes
const seconds = document.getElementById("secondes");  //Appel de l'élément HTML

// Mise en fonction du compte à rebours

function setTimeout(durée) { //fonction de démarrage du décompte
    count = durée;  //Définition de la durée
    choixTimer(count);  //Le timer se met à jour
    
    time = setInterval(() => {  //Mise en route du timer
        count--;  //Le timer décrémente d'1 seconde par 1 seconde
        choixTimer(count);  //Mise à jour du timer à chaque seconde en moins
        
        if (count <= 0) {  //Si le compteur atteint zéro...
            clearTimeout(time);  //...le timer s'arrête
            }
            }, 1000); 
            }
            
            //Fonctions de réglage du timer par l'utilisateur issues en partie de nombreuses recherches google
            
            // Mise à jour du timer en heures, minutes, secondes
            function choixTimer(seconds) {  // fonction de mise à jour du timer
                const heures = Math.floor(seconds / 3600);  //heures en secondes
                const minutes = Math.floor((seconds % 3600) / 60);  //minutes en secondes
                const newSeconds = seconds % 60;  //secondes restantes à ajouter au reste
            
                document.getElementById('heures').textContent = String(heures).padStart(2, '0');  //affichage de l'heure
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');  //affichage des minutes
                document.getElementById('secondes').textContent = String(newSeconds).padStart(2, '0');  //affichage des secondes
            }
            
            // Choix du temps par l'utilisateur
            document.getElementById('choiceTemp').addEventListener('click', () => { //Ecouteur d'événement du démarrage du compteur au clic 
                const choixHeures = parseInt(document.getElementById('choixHeures').value);  //Valeur de l'heure définie par l'utilisateur
                const choixMinutes = parseInt(document.getElementById('choixMinutes').value);   //Valeur des minutes définies choisie par l'utilisateur
                const choixSecondes = parseInt(document.getElementById('choixSecondes').value);   //Valeur des secondes définies par l'utilisateur
            
                const totalSecondes = (choixHeures * 3600) + (choixMinutes * 60) + choixSecondes;  //Total du temps défini par l'utilisateur converti en secondes
            
                setTimeout(totalSecondes);  //Initialisation du timer
            });
            

// Fonction pour Stopper le minuteur (idem cours js)
const stopTimer = function() {

    clearTimeout(time); //Arrêt du timer

};

const stopButton = document.getElementById("stop");  //Appel du bouton stop par son ID
stopButton.addEventListener("click", stopTimer);  //Ecouteur d'événement du bouton stop au clic


// Fonction pour Redémarrer le minuteur (idem cours js)
const startTimer = function() {

    setTimeout(count); //Le timer reprend au temps restant
        
};

const startButton = document.getElementById("play"); //Appel du bouton play par son ID
startButton.addEventListener("click", startTimer);  //Ecouteur d'événement du bouton play au clic

// Fonction pour Remettre à zéro le minuteur
const resetCount = function() {

    clearTimeout(time);  //Arrêt du timer
    count = 0;  //Remise à zéro du compteur
    choixTimer(count);  //Mise à jour à zéro du timer
    document.getElementById('choixHeures').value = 0;  //Valeur des heures remise à zéro
    document.getElementById('choixMinutes').value = 0;  //Valeur des minutes remise à zéro
    document.getElementById('choixSecondes').value = 0;  //Valeur des secondes remise à zéro

};

const resetButton = document.getElementById("zero");  //Appel du bouton remise à zéro par son ID
resetButton.addEventListener("click", resetCount);  //Ecouteur d'événement du bouton remise à zéro au clic






/*1ère tentative fonctionnelle mais sans possibilité de choix du temps par l'utilisateur

let time= "60";  //Variable de décompte du compte à rebours

const choixHeures = document.getElementById('choixHeures');
const choixMinutes = document.getElementById('choixMinutes');
const choixSecondes = document.getElementById('choixSecondes');/*


/*Fonction de mise en route du compte à rebours

const countUp = function() {

//condition pour que le timer s'arrête à zéro

    if (time < 0) {  //Si timer inférieur à zéro :
        clearTimeout(count); //Le timer s'arrête

    } else {  //Sinon :
        seconds.innerHTML = time--;  //le timer descend...
        count = setTimeout(countUp, 1000); //...de seconde en seconde
    }
};

countUp();*/


/*Choix de la durée du compte à rebours souhaité (heure, minutes, secondes)
const choixTimer = function() {
const choixHeures = parseInt(document.getElementById('choixHeures').value);
const choixMinutes = parseInt(document.getElementById('choixMinutes').value);
const choixSecondes = parseInt(document.getElementById('choixSecondes').value);

//calcul du temps total du timer en secondes
let tempSecondes = (choixHeures * 3600) + (choixMinutes * 60) + choixSecondes;

}
choixTimer();

// Fonction pour mettre à jour l'affichage
function updateDisplay(hours, minutes, seconds) {
    document.getElementById('choixHeures').textContent = String(hours).padStart(2, '0');
    document.getElementById('choixMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('choixSecondes').textContent = String(seconds).padStart(2, '0');
    }
    
    document.getElementById("setButton").addEventListener("click", setTime);
*/