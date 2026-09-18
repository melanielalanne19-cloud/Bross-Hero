# Bross'Hero — prototype

Prototype fonctionnel de l'application "Bross'Hero" : une web app (HTML/CSS/JS vanilla, sans framework ni build).
C'est une **Progressive Web App (PWA)** : elle peut être ajoutée à l'écran d'accueil d'un téléphone et se comporter comme une app installée (icône, plein écran, hors navigateur).

## Structure des fichiers

```
brosshero-project/
├── index.html        → structure des 13 écrans (accueil, brossage, royaume, espace parents, etc.)
├── manifest.json      → fichier de manifeste PWA (nom, icônes, couleurs, mode plein écran)
├── css/
│   └── style.css       → tous les styles (charte graphique, animations, responsive)
├── icons/
│   └── icon.svg        → icône de l'application (utilisée sur l'écran d'accueil)
└── js/
    └── app.js           → toute la logique (navigation, chrono de brossage, XP, sons, sauvegarde)
```

## Comment le tester

**Option la plus simple** : double-clique sur `index.html`, il s'ouvre dans ton navigateur.
⚠️ En ouvrant le fichier directement (`file://`), le manifeste PWA et l'installation sur écran d'accueil ne fonctionnent pas (limitation des navigateurs) — mais toute l'application fonctionne normalement.

**Pour tester l'installation PWA (icône + plein écran)**, il faut servir les fichiers via http(s). Le plus simple :

```bash
cd brosshero-project
python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000` sur ton téléphone (même réseau Wi-Fi) ou sur ton ordinateur.
Pour un vrai test sur mobile avec "Ajouter à l'écran d'accueil", il faut l'héberger en ligne (Netlify, Vercel, GitHub Pages... tous gratuits et prennent quelques minutes).

## Ce qui est fonctionnel dans ce prototype

- Parcours complet : Accueil → Mission → 2 minutes de brossage guidé (4 zones) → Victoire → XP/pièces → Royaume amélioré
- 4 personnages jouables (Brossy, Flossy, Molaro, Étincelle)
- Sons de transition entre les zones de brossage (générés en Web Audio, aucun fichier audio externe)
- Suivi Matin / Midi / Soir
- XP proportionnel si la mission est arrêtée avant la fin
- Carte des mondes, Royaume personnalisable, récompenses virtuelles, espace parents protégé par une question simple
- Sauvegarde de la progression (via `window.storage`, disponible uniquement dans l'aperçu Claude.ai — en dehors de Claude, la progression reste en mémoire le temps de la session, voir "Prochaines étapes" ci-dessous)

## Prochaines étapes pour un vrai produit

1. **Sauvegarde persistante réelle** : remplacer `window.storage` par une vraie base de données (ex. Firebase, Supabase) pour que la progression survive à une fermeture d'app / changement d'appareil.
2. **Voix et musique** : le cahier des charges prévoit une voix chaleureuse guidant l'enfant — actuellement seuls des sons courts (bips) sont générés. Il faudrait enregistrer/générer de vrais fichiers audio (voix + musique douce).
3. **App native (App Store / Google Play)** : ce prototype est une web app. Pour publier sur les stores, il faudrait soit l'empaqueter (Capacitor/Cordova reprend ce même code HTML/CSS/JS), soit le réécrire en React Native / Flutter pour de meilleures performances et un accès natif au capteur de mouvement (utile pour détecter le geste de brossage).
4. **Authentification parentale renforcée** : remplacer la simple question de calcul par un vrai code PIN ou une confirmation par email, pour une app en production.
5. **Illustrations finales** : les personnages sont ici en SVG simplifié (placeholders fonctionnels) — à remplacer par les illustrations 3D cartoon définitives.
