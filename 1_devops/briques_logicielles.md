---
title: Briques logicielles & infrastructures
sidebar_position: 3
tags: [iaac, cloud]
---

# Briques logicielles & infrastructures

## Amazon
Documentation Node.js -> [ici](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_sqs_code_examples.html#scenarios)

## Cloud Provider
Construire des VPS pour augmenter monter en compétences.

- AWS (Amazon Web Services)
- Heroku
- OVH
- Azure

## Infra as Code
- Terraform (opentf -> open-source)
  - provisionning (allocation de ressources)
  - [doc](https://registry.terraform.io)
- Ansible
  - gestionnaire de configuration
  - [doc](https://docs.ansible.com/ansible/latest/index.html)

## Reverse proxy
- [Nginx](https://nginx.org/en/docs/)
- [Traefic](https://traefik.io)
- [Caddy](https://caddyserver.com)

## Gestion des identités
- [Keycloak](https://www.keycloak.org)

## Storage / bucket
- Amazon S3
- [Minio](https://min.io) (open-source, install on VPS)

## Bus de message
- Amazon SQS
- [RabbitMQ](https://www.rabbitmq.com)
- [Kafka](https://kafka.apache.org)

## Tasks runner
- [Task](https://taskfile.dev)
- [Pypyr](https://pypyr.io/)
- [Celery](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) (python + bus message)
- [Prefect](https://www.prefect.io) (+ bus message)
- [Dagger](https://dagger.io)