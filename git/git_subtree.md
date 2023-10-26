---
title: Git subtree
sidebar_position: 1
tags: [dev, git, repo]
---

Permet de créer une nouvelle branche git pour un répertoire donné. Cela permet de découper le code et de gérer ce module indépendamment. 

![Illustrastion du concept git subtree](./assets/subtree_img.png)

### Ajout du repo distant du module

Permet de créer un alias pour faciliter les appelle au repo distant.
`git remote add -f <alias repo> <url repo>`

### Créer le sous-module

Le dossier dans lequel le sous-module sera ne doit pas exister.
`git subtree add --prefix <dossier> <alias repo distant> <branche souhaitée> --squash`

Une fois la commande exécutée, le repo distant du sous module va être tiré et les fichiers de celui-ci seront dans le dossier.

### Récupérer des changements
En étant dans le projet principal, par défaut `git pull` ne tirera que les modifications de ce projet et pas des sous-module.
Pour cela il faut utiliser la commande :
`git subtree pull --prefix <dossier> <alias repo distant> <branche souhaitée> --squash`

Dans ce cas, seul les modifications du sous-module seront tirées. 

### Envoi des changements 
Il en va de même pour envoyer des modifications sur le repo distant `git push` ne fonctionne que pour le projet principal. Pour le sous-module il faut utiliser :
`git subtree push --prefix <dossier> <alias repo distant> <branche souhaitée> --squash`
Dans ce cas, seul les modifications du sous-module seront envoyées. 