# HBNB - Plateforme de Réservation de Logements

Application web moderne de réservation de logements de type Airbnb, avec interface futuriste en mode néon.

## 🌐 Démo en ligne

**Site web** : https://ivane-ba.github.io/HBNB/

## 🎮 Mode Démo (sans backend)

L'application fonctionne actuellement en **mode démo** avec des données mockées (simulées). Toutes les fonctionnalités sont disponibles, mais les données ne sont pas persistées.

### Identifiants de connexion pour la démo :

- **Email** : `demo@hbnb.com`
- **Mot de passe** : `demo123`

## ✨ Fonctionnalités

- ✅ **Authentification** : Connexion/Déconnexion avec gestion de session (JWT)
- ✅ **Catalogue de places** : Affichage de tous les logements disponibles
- ✅ **Filtre de prix** : Slider interactif pour filtrer par prix
- ✅ **Détails des places** : Galerie d'images, informations complètes, aménités
- ✅ **Système d'avis** : Consultation et ajout d'avis (authentification requise)
- ✅ **Profil utilisateur** : Modification de vos informations personnelles
- ✅ **Mode clair/sombre** : Thème personnalisable avec bouton toggle
- ✅ **Design responsive** : Compatible mobile, tablette et desktop

## 🚀 Technologies utilisées

- **Frontend** : HTML5, CSS3 (avec effets glass morphism et néon), JavaScript vanilla
- **Images** : Hébergées sur Unsplash
- **Hébergement** : GitHub Pages
- **Mode démo** : API mockée (pas de backend requis)

## 📂 Structure du projet

```
HBNB/
├── docs/
│   ├── index.html          # Page d'accueil avec liste des places
│   ├── login.html          # Page de connexion
│   ├── place.html          # Page de détails d'une place
│   ├── profile.html        # Page de profil utilisateur
│   ├── images/             # Logos et icônes
│   │   ├── logo.png
│   │   ├── icon.png
│   │   └── ...
│   ├── scripts/            # Scripts JavaScript
│   │   ├── mockData.js     # Données mockées et API simulée
│   │   ├── index.js        # Logique page d'accueil
│   │   ├── login.js        # Logique authentification
│   │   ├── place.js        # Logique détails place
│   │   ├── profile.js      # Logique profil
│   │   └── light.js        # Gestion thème clair/sombre
│   └── styles/             # Feuilles de style CSS
│       ├── base.css        # Styles de base
│       ├── index.css       # Styles page d'accueil
│       ├── login.css       # Styles page de connexion
│       ├── place.css       # Styles page détails
│       └── profile.css     # Styles page profil
└── README.md
```

## 🔧 Configuration

### Mode Démo (Actuel)

Le mode démo est activé par défaut. Les données sont stockées dans `scripts/mockData.js` et incluent :
- 1 utilisateur de test
- 6 logements avec images
- 5 avis d'exemple

### Basculer vers un backend réel

Si vous souhaitez connecter un backend Flask/Python réel :

1. **Désactiver le mode mock** : Dans `scripts/mockData.js`, modifier :
   ```javascript
   window.MOCK_MODE = false; // Désactive le mode démo
   ```

2. **Configurer l'URL du backend** : Mettre à jour les URLs dans les fichiers JavaScript pour pointer vers votre API.

3. **Backend requis** : Une API REST avec les endpoints suivants :
   - `POST /api/v1/auth/login` - Connexion
   - `GET /api/v1/auth/me` - Informations utilisateur connecté
   - `GET /api/v1/places/` - Liste des places
   - `GET /api/v1/places/:id` - Détails d'une place
   - `GET /api/v1/reviews/by_place/:id` - Avis d'une place
   - `POST /api/v1/reviews/` - Ajouter un avis
   - `GET /api/v1/users/:id` - Profil utilisateur
   - `PUT /api/v1/users/:id` - Modifier profil utilisateur

## 🎨 Personnalisation

### Modifier les données de démo

Éditez le fichier `docs/scripts/mockData.js` pour :
- Ajouter/modifier des logements
- Changer les utilisateurs de test
- Ajouter des avis

### Modifier le thème

Les variables CSS sont définies dans `docs/styles/base.css` :
- Couleurs principales
- Effets néon et glass morphism
- Espacements et typographie

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ Mobile responsive (iOS & Android)
- ✅ Tablettes
- ✅ Desktop

## 🐛 Problèmes connus

- En mode démo, les données sont réinitialisées à chaque rechargement de page
- Les images des places utilisent Unsplash (connexion internet requise)

## 📝 Licence

© 2025 HBNB. Tous droits réservés.

## 👨‍💻 Auteur

Projet développé dans le cadre de la formation Holberton School.
