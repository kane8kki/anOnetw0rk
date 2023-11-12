// Fonction pour rafraîchir la page lorsqu'on clique sur le logo
function refreshPage() {
  window.location.reload();
}

// Fonction pour envoyer un tweet
function sendTweet() {
  var pseudo = document.getElementById("pseudo").value;
  var content = document.getElementById("tweet-content").value;

  if (pseudo && content) {
    // Récupérer les tweets existants depuis le stockage local
    var existingTweets = JSON.parse(localStorage.getItem("tweets")) || [];

    // Ajouter le nouveau tweet à la liste
    var newTweet = {
      pseudo: pseudo,
      content: content
    };
    existingTweets.push(newTweet);

    // Enregistrer la liste mise à jour dans le stockage local
    localStorage.setItem("tweets", JSON.stringify(existingTweets));

    // Mettre à jour l'affichage des tweets
    displayTweets();

    // Effacer les champs de saisie après avoir tweeté
    document.getElementById("pseudo").value = "";
    document.getElementById("tweet-content").value = "";
  }
}

// Fonction pour afficher les tweets
function displayTweets() {
  var tweetList = document.getElementById("tweet-list");
  tweetList.innerHTML = "";

  // Récupérer les tweets depuis le stockage local
  var existingTweets = JSON.parse(localStorage.getItem("tweets")) || [];

  // Afficher chaque tweet
  existingTweets.forEach(function(tweet) {
    var tweetElement = document.createElement("div");
    tweetElement.className = "tweet";
    tweetElement.innerHTML = `<strong>${tweet.pseudo}:</strong> ${tweet.content}`;
    tweetList.appendChild(tweetElement);
  });
}

// Appeler la fonction d'affichage des tweets au chargement de la page
window.onload = displayTweets;
