// Configuration de l'URL du backend
// 
// INSTRUCTIONS :
// 1. Pour utiliser le backend LOCAL (développement) :
//    - Décommentez la ligne avec localhost
//    - Commentez la ligne avec le backend déployé
//
// 2. Pour utiliser le backend DÉPLOYÉ (production) :
//    - Commentez la ligne avec localhost
//    - Décommentez et mettez à jour l'URL de votre backend Render
//
// 3. Pour utiliser les données MOCKÉES (démo sans backend) :
//    - Laissez window.MOCK_MODE = true dans mockData.js

// 🏠 Backend LOCAL (pour développement)
// window.API_BASE_URL = 'http://127.0.0.1:5000';

// ☁️ Backend DÉPLOYÉ sur Render (pour production)
// REMPLACEZ l'URL ci-dessous par votre vraie URL Render une fois déployé
// Exemple : window.API_BASE_URL = 'https://hbnb-backend-xxxx.onrender.com';
window.API_BASE_URL = 'https://votre-backend.onrender.com';  // ⚠️ À MODIFIER

// Note : Si window.MOCK_MODE = true dans mockData.js, cette URL sera ignorée
