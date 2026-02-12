# Configuration GitHub Pages

## Comment activer GitHub Pages pour ce projet

### Étape 1 : Accéder aux paramètres du dépôt

1. Allez sur votre dépôt GitHub : https://github.com/Ivane-Ba/HBNB
2. Cliquez sur l'onglet **Settings** (Paramètres)

### Étape 2 : Activer GitHub Pages

1. Dans le menu de gauche, cliquez sur **Pages**
2. Dans la section **Source** (ou **Build and deployment**) :
   - **Branch** : Sélectionnez `main`
   - **Folder** : Sélectionnez `/docs` (très important !)
3. Cliquez sur **Save**

### Étape 3 : Attendre le déploiement

- GitHub va automatiquement déployer votre site
- Cela prend généralement 1-3 minutes
- Une fois terminé, vous verrez un message en haut avec l'URL de votre site :
  ```
  Your site is live at https://ivane-ba.github.io/HBNB/
  ```

### Étape 4 : Vérifier

1. Cliquez sur le lien ou allez à : https://ivane-ba.github.io/HBNB/
2. Vous devriez voir votre site avec :
   - Le logo HBNB
   - Les 6 logements disponibles
   - Le slider de prix fonctionnel

### Étape 5 : Tester la connexion

1. Cliquez sur **Login** dans le header
2. Utilisez les identifiants de démo :
   - **Email** : demo@hbnb.com
   - **Mot de passe** : demo123
3. Vous devriez être redirigé vers la page d'accueil connecté

## Dépannage

### Les images ne s'affichent pas

**Problème** : Les images du logo/icônes ne sont pas visibles

**Solution** :
1. Vérifiez que le dossier `docs/images/` contient bien tous les fichiers
2. Vérifiez que ces fichiers sont bien commités dans Git :
   ```bash
   git ls-files docs/images/
   ```
3. Si des images manquent, ajoutez-les et poussez :
   ```bash
   git add docs/images/
   git commit -m "Add missing images"
   git push
   ```

### La page affiche une erreur 404

**Problème** : GitHub Pages renvoie une erreur 404

**Solutions possibles** :
1. Vérifiez que vous avez bien sélectionné le dossier `/docs` et pas `/root`
2. Assurez-vous que le fichier `docs/index.html` existe
3. Attendez quelques minutes, le déploiement peut prendre du temps

### Les modifications ne sont pas visibles

**Problème** : Vous avez fait des modifications mais elles n'apparaissent pas sur le site

**Solution** :
1. Vérifiez que vous avez bien commité et poussé vos modifications :
   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```
2. Attendez 1-2 minutes pour que GitHub redéploie
3. Videz le cache de votre navigateur (Ctrl+F5 ou Cmd+Shift+R)

### Le site fonctionne localement mais pas sur GitHub Pages

**Problème** : Tout fonctionne en local mais pas en ligne

**Solutions** :
1. Vérifiez que tous les chemins sont relatifs (pas de `/` au début)
2. Vérifiez que `mockData.js` est bien chargé avant les autres scripts
3. Ouvrez la console du navigateur (F12) pour voir les erreurs

## Mise à jour du site

Pour mettre à jour votre site après des modifications :

```bash
# 1. Vérifier les modifications
git status

# 2. Ajouter tous les fichiers modifiés
git add .

# 3. Créer un commit
git commit -m "Description de vos modifications"

# 4. Pousser vers GitHub
git push origin main

# 5. Attendre 1-2 minutes, puis rafraîchir votre navigateur
```

## URL du site

Une fois configuré, votre site sera accessible à :
**https://ivane-ba.github.io/HBNB/**

Vous pouvez partager cette URL avec n'importe qui !
