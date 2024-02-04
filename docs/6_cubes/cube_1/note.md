---
sidebar_position: 2
tags: [cubes-1, note-1]
---

# Notes

Notes générales sur le CUBE 1

## Point de vue Gwen

- 2 entrypoints
  - Pas bien, augmente la surface d'attaque et augmente la compléxité de la sécurité
- Pas de reverse proxy
- Application historique = SQL Server - Java
  - L'entreprise a grossi et a déployé d'autre apps autour de son application historique
- Code perdu, gestion des droits:
  - Grosse dette technique, gros risque de sécurité, à recoder
  - Brique existante [Keycloak](https://www.keycloak.org/)
    - Mieux que de recoder l'ancienne app
