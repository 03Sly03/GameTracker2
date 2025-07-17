# Faire un commit

## ✅ Prérequis

- Git(https://git-scm.com/) -> installé (`git --version` pour vérifier)
- GitHub(https://github.com/) -> avoir un compte et un repository créé (depuis le web ou l'application desktop) (exemple : "https://github.com/utilisateur/mon-projet.git")

## Travailler sur le projet

Ajoutez des dossier & des fichiers dans le répertoire du projet.

## Vérifier l'état du projet

```bash
git status
```

Permet de voir :

- quels fichiers sont modifiés mais pas encore ajoutés à l'index. (staged)
- quels fichiers sont staged. (prêt à être commités)
- s'il y a des fichiers non suivis dans le dossier. (untracked)
- sur quel branche on travaille.

## Ajouter le(s) fichier(s) à l'index (staging)

C'est comme faire un instantané/snapshot du projet.

Soit en entier :

```bash
git add .
```

Soit partiellement en ajoutant un fichier spécifique :

```bash
git add fichier.txt
```

Où partiellement en ajoutant plusieurs fichiers spécifique :

```bash
git add fichier.txt fichier.js fichier.html
```

## Effectuer le commit

C'est donner un nom à l'instantané/snapshot qui a été fait précédement

```bash
git commit -m "Premier commit"
```
