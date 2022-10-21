//Ajoute tous les bouttons dans une NodeList
var buttons = document.querySelectorAll(".choix");
//Supprime le bouton reset de la NodeList
buttons.pop;
//console.log(buttons)

//Affiche score des joueurs
var scoreJ = 0;
var scoreB = 0;
document.querySelector("#ScoreB").innerHTML = `Robot <br> ${scoreB}`;
document.querySelector("#ScoreJ").innerHTML = `Joueur <br> ${scoreJ}`;

//Gestion des buttons
for (let i = 0; i < buttons.length; i++) {
    //Ecoute l'évenement d'un click sur un bouton 
    buttons[i].addEventListener('click', function () {
        //Assigne au joueur la valeur de la classe du boutton 'Pierre choix' et remplace 'choix' par ''
        const joueur = buttons[i].className.replace(" choix", '');
        //Assigne aléatoirement un choix au bot
        const robot = buttons[Math.floor(Math.random() * buttons.length)].className.replace(" choix", '');

        //Bouton reset
        document.querySelector("#reset").addEventListener('click',
            function () {
                scoreJ = 0;
                scoreB = 0;
                document.querySelector("#ScoreB").innerHTML = `Robot <br> ${scoreB}`;
                document.querySelector("#ScoreJ").innerHTML = `Joueur <br> ${scoreJ}`;
            });

        //Gestion du résultat et du score
        let resultat = "";

        if (joueur === robot) {
            resultat = "Egalité";
        }
        else if ((joueur === "Pierre" && robot === "Ciseaux") ||
            (joueur === "Feuille" && robot === "Pierre") ||
            (joueur === "Ciseaux" && robot === "Feuille")) {
            document.querySelector("#ScoreJ").innerHTML = `Joueur <br> ${scoreJ}`;
            resultat = "Vous avez gagné";
            scoreJ++;
        } else {
            document.querySelector("#ScoreB").innerHTML = `Robot <br> ${scoreB}`;
            resultat = "Vous avez perdu";
            scoreB++;
        }
        //Affiche le résultat
        document.querySelector(".resultat").innerHTML = `Joueur : ${joueur}</br>
                                                        Robot : ${robot} </br></br>
                                                        ${resultat}`;
    });
}