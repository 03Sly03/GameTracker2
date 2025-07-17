# Lier le projet à un dépôt distant (GitHub) /!\ à ne faire qu'une fois

## ✅ Prérequis

- Git(https://git-scm.com/) -> installé (`git --version` pour vérifier)
- GitHub(https://github.com/) -> avoir un compte et un repository créé (depuis le web ou l'application desktop) (exemple : "https://github.com/utilisateur/mon-projet.git")

## Étapes

### changer le nom de la branche principale de "master" à "main"

C'est pour suivre la convention

```bash
git branch -M main
```

### lié le repo local au repo distant

```bash
git remote add origin https://github.com/utilisateur/mon-projet.git
```

### Envoyer sur le dépôt distant

```bash
git push -u origin main
```
