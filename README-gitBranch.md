# Tutoriel Git : Gestion Complète d'une Branche

## créer & supprimer une branche

### 1. Créer une branche

```bash
git checkout -b nom-de-la-branche
```

_Crée et se positionne sur la nouvelle branche._

---

### 2. Pousser la branche vers le dépôt distant

```bash
git push -u origin nom-de-la-branche
```

_Pousse la branche sur le dépôt distant et établit le suivi._

---

### 3. Supprimer la branche en local

```bash
git branch -d nom-de-la-branche
```

_Supprime la branche en local (utiliser **`-D`** si la branche n'est pas fusionnée)._

---

### 4. Supprimer la branche sur le dépôt distant

```bash
git push origin --delete nom-de-la-branche
```

_Supprime la branche du dépôt distant._

---

## Récupérer une branche

### Récupérer (fetch) et se positionner sur une branche distante

```bash
git fetch
git checkout nom-de-la-branche
```

_Récupère la branche distante et se positionne dessus._

---

## Récapitulatif rapide

| Action                     | Commande                                       |
| -------------------------- | ---------------------------------------------- |
| Créer une branche          | `git checkout -b nom-de-la-branche`            |
| Pousser la branche         | `git push -u origin nom-de-la-branche`         |
| Supprimer branche locale   | `git branch -d nom-de-la-branche`              |
| Supprimer branche distante | `git push origin --delete nom-de-la-branche`   |
| Récupérer et utiliser      | `git fetch` + `git checkout nom-de-la-branche` |
