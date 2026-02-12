# 🚀 Guide : Connecter votre vrai backend

Actuellement, votre site GitHub Pages (https://ivane-ba.github.io/HBNB/) utilise des **données mockées** (simulées). 

Voici comment utiliser votre **vrai backend** à la place !

---

## 📋 3 Options disponibles

### ✅ Option 1 : Mode DÉMO (actuel)
- Utilise des données simulées (mockData.js)
- Fonctionne sans backend
- Parfait pour présenter le design

**Configuration actuelle** : `window.MOCK_MODE = true` dans `docs/scripts/mockData.js`

---

### 🏠 Option 2 : Backend LOCAL
- Utilise votre backend sur `http://127.0.0.1:5000`
- Ne fonctionne que sur votre ordinateur
- Parfait pour le développement

**Comment activer** :
1. Lancez votre backend local :
   ```bash
   cd /home/icanor/holberton/holbertonschool-hbnb/part4/hbnb/back
   python run.py
   ```

2. Modifiez `docs/scripts/mockData.js` :
   ```javascript
   window.MOCK_MODE = false;  // Désactive le mode mock
   ```

3. Modifiez `docs/scripts/config.js` :
   ```javascript
   window.API_BASE_URL = 'http://127.0.0.1:5000';
   ```

4. Ouvrez `docs/index.html` directement dans votre navigateur (pas via GitHub Pages)

---

### ☁️ Option 3 : Backend DÉPLOYÉ (recommandé pour production)
- Votre backend sera accessible en ligne 24/7
- Votre site GitHub Pages pourra l'utiliser
- Gratuit avec Render.com

---

## 🚀 OPTION 3 : Déployer votre backend sur Render.com

C'est la solution recommandée pour avoir votre site complètement fonctionnel en ligne !

### Étape 1 : Pousser les fichiers de déploiement sur GitHub

```bash
cd /home/icanor/holberton/holbertonschool-hbnb
git add part4/hbnb/back/start.sh
git add part4/hbnb/back/requirements.txt
git add part4/hbnb/back/RENDER_DEPLOY.md
git commit -m "Add Render deployment files"
git push origin main
```

### Étape 2 : Déployer sur Render.com

1. **Créer un compte** : https://render.com (connexion avec GitHub)

2. **Créer un Web Service** :
   - Cliquez sur "New +" → "Web Service"
   - Sélectionnez votre dépôt `holbertonschool-hbnb`
   
3. **Configuration** :
   ```
   Name: hbnb-backend
   Region: Frankfurt (EU Central)
   Branch: main
   Root Directory: part4/hbnb/back
   Runtime: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: bash start.sh
   ```

4. **Variables d'environnement** :
   ```
   SECRET_KEY = votre-cle-secrete-tres-longue-123456
   FLASK_ENV = production
   ```

5. **Cliquez sur "Create Web Service"**

6. **Attendez 3-5 minutes** que le déploiement se termine

7. **Notez votre URL** : `https://hbnb-backend-xxxx.onrender.com`

### Étape 3 : Initialiser la base de données

Une fois déployé, allez dans l'onglet **Shell** de votre service Render et exécutez :

```python
from app import create_app, db
from app.models.user import User
import argon2

app = create_app()
app.app_context().push()

# Créer un utilisateur admin
ph = argon2.PasswordHasher()
hashed = ph.hash("12345678")

admin = User(
    email="admin@hbnb.com",
    password=hashed,
    first_name="Admin",
    last_name="HBNB",
    is_admin=True
)

db.session.add(admin)
db.session.commit()
print("✅ Admin créé")
```

### Étape 4 : Connecter votre frontend à ce backend

```bash
cd /home/icanor/holberton/HBNB
```

1. **Modifiez `docs/scripts/mockData.js`** :
   ```javascript
   window.MOCK_MODE = false;  // Désactive le mode démo
   ```

2. **Modifiez `docs/scripts/config.js`** :
   ```javascript
   // Remplacez par votre vraie URL Render
   window.API_BASE_URL = 'https://hbnb-backend-xxxx.onrender.com';
   ```

3. **Poussez sur GitHub** :
   ```bash
   git add .
   git commit -m "Connect to Render backend"
   git push origin main
   ```

4. **Attendez 2 minutes** que GitHub Pages se mette à jour

5. **Testez** : https://ivane-ba.github.io/HBNB/

### Étape 5 : Créer vos premières places

Connectez-vous avec `admin@hbnb.com` / `12345678` et créez vos logements via l'API ou le backend !

---

## 🎯 Résumé des fichiers modifiés

### Backend (pour déploiement) :
- ✅ `start.sh` - Script de démarrage pour Render
- ✅ `requirements.txt` - Ajout de gunicorn

### Frontend (pour connexion backend) :
- ✅ `config.js` - Configuration de l'URL du backend
- ✅ `mockData.js` - Flag MOCK_MODE pour activer/désactiver
- ✅ Tous les fichiers JS utilisent maintenant `window.API_BASE_URL`

---

## ⚠️ Important

**Plan gratuit Render** :
- Le service s'endort après 15 min d'inactivité
- Premier chargement = 30-60 secondes (réveil du service)
- 750 heures gratuites / mois

**Solution** : Ajoutez un ping toutes les 10 minutes depuis un service comme UptimeRobot (gratuit).

---

## 🆘 Besoin d'aide ?

Consultez le guide détaillé : `/home/icanor/holberton/holbertonschool-hbnb/part4/hbnb/back/RENDER_DEPLOY.md`
