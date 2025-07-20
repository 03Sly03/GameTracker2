# Pitch Technique de l'Application Web "Guilde"

**Guilde** est une application web légère et modulaire, conçue spécifiquement pour les joueurs de jeux vidéo, tous genres confondus (MMORPG, FPS, stratégie, sandbox, etc.). Elle offre une solution simple et rapide pour la gestion de guildes ou clans, sans dépendance serveur ni base de données complexe.

L'objectif est de fournir aux communautés de joueurs un outil minimaliste, accessible via navigateur, permettant de structurer leur groupe de jeu et de partager leur identité (blason, objectifs, style) sans inscription ni complexité technique.

## Caractéristiques Techniques

- **Technologies principales** : HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Stockage** : localStorage pour la gestion locale des guildes utilisateur (clé : userGuild).
- **Données publiques** : chargement via Fetch API d'un fichier statique JSON (`guilds.json`).
- **Navigation** : Multi-pages (non-SPA), avec rechargement classique des pages.
- **Composants réutilisables** : barre de navigation et footer injectés dynamiquement via `common.js`.
- **Design** : responsive, mobile-friendly.

## Fonctionnalités Clés

- 🛠️ Création de guilde personnalisée (nom, blason via URL, description, objectif, style).
- 🔒 Gestion de guilde personnelle unique (1 utilisateur = 1 guilde) avec système de blocage de création si une guilde existe déjà.
- 📅 Liste publique des guildes chargée depuis `guilds.json`.
- 📋 Vue détaillée de chaque guilde accessible depuis la liste (avec passage de l'ID par paramètre d'URL).
- ❌ Suppression de sa propre guilde disponible dans la section "Ma Guilde".
- ⚙️ Navigation simple : `index.html`, `create.html`, `myGuild.html`, `contact.html`, `about.html`, `guildDetail.html`.

## Cas d'Utilisation Typique

1. Le joueur accède à l'application via un simple lien web.
2. Il crée sa guilde personnalisée si aucune guilde personnelle n'est définie.
3. Sa guilde est enregistrée dans le navigateur.
4. Il consulte et partage sa guilde avec d'autres joueurs via la vue publique.
5. Il peut supprimer et recréer une nouvelle guilde si nécessaire.
6. Il navigue entre les pages de présentation/contact/about pour plus d'informations.

## Bénéfices pour les Joueurs

- Aucune installation requise.
- Zéro configuration serveur.
- Simple à intégrer à une communauté existante (Discord, forums, etc.).
- Design adapté à tous les types de jeux et styles de communautés.

## Perspectives d'Amélioration

- Intégration backend (Node.js, PHP, etc.) pour stockage et partage véritable entre utilisateurs.
- Système multi-utilisateur et gestion des membres de guilde.
- Historique des guildes, statistiques, intégration réseau social gamer.

---

**Guilde** : une application simple, technique, et universelle pour rassembler les joueurs autour d'une identité commune dans l'univers des jeux vidéo.
