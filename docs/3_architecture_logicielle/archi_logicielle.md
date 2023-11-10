---
title: Architecture logicielle
sidebar_position: 1
tags: [logiciel, architecture]
---

# Architecture logicelle
## C'est quoi ?

L'architecture conrrespond aux guidelines pour résoudre un problème fonctionnel.
On pose les bases techniques, les préconisations pour l'évolution et les choix techniques pour la gestion du projet.
DAT = Dossier d'Architecture Technique
Une bonne architecture est simple et évolutive.

## Les principes pour une bonne archi
- **Simplicité** : pas de sur-ingéniering, design-pattern
- **Evolutivité** : continuité dans le temps
- **Maintenabilité** : maintenance facile.
- **Compatibilité** : navigateur, OS, différentés plates-formes.
- **Interconnectivité** : comment on se connecte à une application.

## 2 types d'architecture

![Architecture monolithe VS micro-services](./assets/monolith_ms.jpg)

**Monolithique** : une seule application autonome, scalabitlité réduite et simple. On doit scale toute l'application.

**Micro-services** : découpage en services indépendants les uns des autres. Adaptée aux applications complexes, et aux besoins de scale les services indépendamment.

## Index inversé
Utiliser pour les moteurs recherche full texte, mais pas comme source de données principale.
C'est pas du SQL. On index que ce que l'on veut chercher. 
L'index doit pouvoir être reconstruit à partir d'une source de données fiable.

## Big Data
Plusieurs teras de données = cout élevé
En dessous c'est pas utile, peut être réglé par des moyens conventionnels.
Utilisé pour sortir des tendances, il faut donc de la forte volumétrie.

## DAT

Page de garde, qui l'a fait, vérifié...
Glossaire
Sommaire
