---
title: Boîte à outils
sidebar_position: 3
tags: [iaac, cloud, outils]
---

## Amazon

Documentation Node.js -> [ici](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_sqs_code_examples.html#scenarios)

## Cloud Provider

Construire des VPS pour augmenter monter en compétences.

- AWS (Amazon Web Services)
- Heroku
- OVH
- Azure

## Infra as Code

- **Terraform (opentf -> open-source)**
  - Provisionning (allocation de ressources) : [Doc](https://registry.terraform.io)
  - Nécessité d'installer la CLI AWS pour lier le compte et Terraform.
  - Création d'un groupe de sécurité sur l'interface AWS pour les droits EC2
  - Tutoriel pour allouer des ressources AWS : [Ici](https://spacelift.io/blog/terraform-ec2-instance)
  - Tutoriel Stephan Robert : [Ici](https://blog.stephane-robert.info/post/terraform-gitlab-aws-ansible/#cr%C3%A9ation-de-notre-vm-ec2)
- **Ansible**
  - Déploiement d'application, gestion de configuration, contrôleur de commande : [Doc](https://docs.ansible.com/ansible/latest/index.html)

## Storage / bucket

- Amazon S3
- [Minio](https://min.io) (open-source, install on VPS)

## Reverse proxy

- [Nginx](https://nginx.org/en/docs/)
- [Traefic](https://traefik.io)
- [Caddy](https://caddyserver.com)

## Config manager

Tutoriel Chef, Puppet, Ansible : [Ici](https://www.youtube.com/live/O1s16cYzC10?si=eA_9bLAyX9PmUtZ-)

- [Chef](https://www.chef.io/solutions/configuration-management)
  - Tuto Youtube : [Ici](https://www.youtube.com/watch?v=04oITjdLtho)
- [Puppet](https://www.puppet.com)
- [Cfengine](https://docs.cfengine.com/docs/3.22/getting-started.html)

## Gestion des identités

- [Keycloak](https://www.keycloak.org)

## Bus de message

- Amazon SQS
- [RabbitMQ](https://www.rabbitmq.com)
- [Kafka](https://kafka.apache.org)

## Tasks runner

- [Task](https://taskfile.dev)
- [Pypyr](https://pypyr.io/)
- [Celery](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) (python + bus message)
- [Prefect](https://www.prefect.io) (+ bus message)

## CI / CD

- [Dagger](https://dagger.io)
  - Outil d'intégration continue.

## Data science

- [Miller](https://miller.readthedocs.io/en/6.9.0/)
  - Cli pour de la gestion / transformation de data.
- [DVC](https://dvc.org/)
  - S3/Minio -> Git -> DVC (_Data Version Control_)
  - Surcouche à Git, orienté data.
  - Va crée un hash de la data, et détecter les changements de hash donc de data.
