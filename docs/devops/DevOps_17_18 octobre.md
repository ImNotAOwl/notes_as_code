---
tags:
  - devops
  - iaac
sidebar_position: 1
title: DevOps_17_18 octobre
---

:::info
IAAC = Infrastructure As A Code

Provisionning d'infrastructure = allocation de ressource
:::
:::info
DSL -> Domain Specific Language

Langage spécifique a une application, ce n'est pas un langage générique.
:::

Mise en place d'un DevNoteBook pour diffuser les bonnes pratiques en tant que dev
Les méthodologies de développement, les process utilisés, etc...

* EditorConfig: pour unifier le code pour tout le monde.
* Documentation de code : sphinx, docusauruse, hugo, etc...
* GitConfig: pour la configuration du git et des commandes

## Docker

* `docker run` = `docker create` + `docker start`
* `docker build` : se trouver dans le dossier disposant d'un Dockerfile, construire une image de mon app, `-t` pour le nommer

## Stateless / Statefull

* Stateless : le conteneur ne doit pas changer
* Statefull : le conteneur est modifié.

L'approche micro-service est un amoncellement de conteneurs qui sont relié à un bus-manager. Chaque conteneur doit être immutable et avoir une seule resposabilité.

## Déclaratif / impératif

* Impératif : on donne les marches à suivre pour effectuer les tâches, comme un script bash.
* Déclaratif : on déclare l'état du container que l'on souhaite et l'outil qui exploite se script s'occupe de gérer le provisionning

:::info Outils divers

## Dagger

Outil d'intégration continue.

## Miller

Cli pour de la gestion / transformation de data.

## Nix

Outil de packaging vs NPM.
:::

[Lien PDF du cours DevOps](./assets/devops.pdf)