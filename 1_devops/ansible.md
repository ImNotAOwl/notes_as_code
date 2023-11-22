---
title: Brique - Ansible
sidebar_position: 5
tags: [iaac, cloud, outils, brique]
---

![Illustrastion du concept ansible](./assets/ansible_overview.svg)

## Le vocabulaire ansible

**Le poste de gestion** : la machine sur laquelle Ansible est installée. Ansible étant agentless, aucun logiciel n’est déployé sur les serveurs gérés. Un seul poste de travail pour gèrer un parc de serveur. Bonne pratique d'installer Ansible sur une VM pour n'avoir qu'un seul entrypoint pour le déploiement.

**L’inventaire** : un fichier contenant les informations concernant les serveurs gérés.

**Les tâches (tasks)** : une tâche est un bloc définissant une procédure à exectuer (par exemple créer un utilisateur ou un groupe, installer un paquet logiciel, etc.).

**Un module** : un module rend abstrait une tâche. Il existe de nombreux modules fournis par Ansible.

**Les playbooks**: un fichier simple au format yaml définissant les serveurs cibles et les tâches devant être effectuées.

**Un rôle** : un rôle permet d’organiser les playbooks et tous les autres fichiers nécessaires (modèles, scripts, etc.) pour faciliter le partage et la réutilisation du code.

**Les facts** : ce sont des variables globales contenant des informations à propos du système (nom de la machine, version du système, interface et configuration réseau, etc.).

**Les handlers** : il sont utilisés pour provoquer un arrêt ou un redémarrage d’un service en cas de changement.

## Organisation d'un playbook Ansible

``` tree
├───📄 hosts
│
├───📁 group_vars/
│   └───📁 all/
│       └───📄 main.yml
│
└───📁 roles/
    └───📁 nginx/
        ├───📁 handlers/
        │   └───📄 main.yml
        ├───📁 tasks/
        │   └───📄 main.yml
        ├───📁 templates/
        │   └───📄 site.conf.j2
        └───📁 vars/
            └───📄 main.yml
```

- **hosts** : Liste des serveurs cibles (yaml ou ini)
- **group_vars/** all/main.yml : défini des variables d'environnemnent pour tout (***all/***) le playbook

``` yaml title: hosts.yml
provide_ec2:
  hosts:
    ec2:
      ansible_host: ec2-15-237-127-9.eu-west-3.compute.amazonaws.com
      ansible_ssh_user: "admin"
```

``` ini title: hosts
provide_ec2 ansible_host="ec2-15-237-127-9.eu-west-3.compute.amazonaws.com" ansible_ssh_user="admin" ansible_python_interpreter="/usr/bin/python3"
```

- **roles/** nginx : c'est l'ensemble des fichiers/éléments lier à la tâche *nginx*
- **tasks/** main.yml : les tâches à éxécuter
- **vars/main.yml** : les variables déclarées et utilisées dans les tâches
- **templates/** site.conf.j2 : template de fichier de configuration pour Nginx, au format Jinja2. Nous allons pouvoir générer dynamiquement le fichier en fonction des variables définies dans **vars/**
- **handlers/** main.yml : ici provoque le redémarrage du service nginx.
