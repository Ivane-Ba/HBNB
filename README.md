# HBnB - Plateforme de Location de Logements

Projet de développement web full-stack réalisé dans le cadre de la formation Holberton School. Cette application web permet de rechercher, consulter et réserver des logements de type Airbnb.

## Accès à l'application

**Site web** : https://ivane-ba.github.io/HBNB/

**API Backend** : https://ivaneba.pythonanywhere.com

**Compte de test** :
- Email : `admin@hbnb.com`
- Mot de passe : `12345678`

## Fonctionnalités

### Authentification
- Système de connexion sécurisé avec JWT
- Gestion des sessions utilisateur
- Profil utilisateur modifiable

### Gestion des logements
- Liste complète des places disponibles
- Filtre par gamme de prix avec slider interactif
- Page de détails avec galerie d'images
- Affichage des équipements (amenities)

### Système d'avis
- Consultation des avis pour chaque logement
- Ajout d'avis (nécessite d'être connecté)
- Notation par étoiles

### Interface utilisateur
- Design moderne avec effets glass morphism et néon
- Mode clair/sombre
- Interface responsive (mobile, tablette, desktop)

## Stack technique

**Frontend**
- HTML5, CSS3, JavaScript (vanilla)
- Hébergement : GitHub Pages

**Backend**
- Python 3.10
- Flask + Flask-RESTX
- SQLAlchemy (ORM)
- JWT pour l'authentification
- Base de données SQLite
- Hébergement : PythonAnywhere

## Structure du projet

```
docs/
├── index.html              # Page d'accueil - liste des logements
├── login.html              # Page de connexion
├── place.html              # Détails d'un logement
├── profile.html            # Profil utilisateur
├── images/                 # Assets visuels
│   ├── logo.png
│   ├── icon.png
│   └── icon_*.png
├── scripts/                # Scripts JavaScript
│   ├── config.js           # Configuration API
│   ├── mockData.js         # Données de démonstration
│   ├── index.js            # Logique page principale
│   ├── login.js            # Authentification
│   ├── place.js            # Détails logement
│   ├── profile.js          # Gestion profil
│   └── light.js            # Thème clair/sombre
└── styles/                 # Feuilles de style
    ├── base.css
    ├── index.css
    ├── login.css
    ├── place.css
    └── profile.css
```

## Configuration et déploiement

### Architecture
- **Frontend** : GitHub Pages (static hosting)
- **Backend** : PythonAnywhere (Flask API)
- **Base de données** : SQLite

### API Endpoints
- `POST /api/v1/auth/login` - Authentification
- `GET /api/v1/auth/me` - Utilisateur courant
- `GET /api/v1/places/` - Liste des logements
- `GET /api/v1/places/:id` - Détails logement
- `GET /api/v1/reviews/by_place/:id` - Avis d'un logement
- `POST /api/v1/reviews/` - Créer un avis
- `GET /api/v1/users/:id` - Profil utilisateur
- `PUT /api/v1/users/:id` - Modifier profil

## Personnalisation

### Thème visuel
Les variables CSS principales sont dans `docs/styles/base.css` :
- Couleurs et dégradés
- Effets glass morphism
- Animations néon

### Mode démo
Le fichier `docs/scripts/mockData.js` contient des données de test qui peuvent être utilisées sans backend actif. Pour basculer entre le mode démo et le backend réel, modifier la variable `MOCK_MODE` dans ce fichier.

## Compatibilité

- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Responsive design (mobile, tablette, desktop)
- Testé sur iOS et Android

## Auteur

Ivane Bagashvili - Projet Holberton School 2025

GitHub : [IvaneHo](https://github.com/IvaneHo)
