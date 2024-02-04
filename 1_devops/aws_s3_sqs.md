---
title: Brique - AWS S3 & AWS SQS
sidebar_position: 6
tags: [iaac, cloud, brique, code, message broken, SQS, stockage, S3]
---

## AWS S3 - Solution de stockage de fichiers

Exemple de code pour télécharger un fichier depuis un S3 et le sauvegarder sur le serveur.

```js title="download.js"
// Load the SDK for JavaScript
import fs from "node:fs";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
const bucketName = "msmybucketcesi";

const client = new S3Client({ region: "eu-west-3", Bucket: bucketName });

const { Body } = await client.send(
  new GetObjectCommand({
    Bucket: bucketName,
    Key: "file-test.png",
  })
);

fs.createWriteStream("./my-upload-file.png", Body.arrayBuffer);
```

## AWS SQS - Solution de bus de message

Exemple de code pour créer une queue et envoyer un message.

``` js
// Load the AWS SDK for Node.js
import {
  SQSClient,
  CreateQueueCommand,
  SendMessageCommand,
} from "@aws-sdk/client-sqs";
// Set the region

// Create an SQS service object
var client = new SQSClient({ region: "eu-west-3" });
const SQS_QUEUE_NAME = "test-queue";

export const createNewQueue = async (sqsQueueName = SQS_QUEUE_NAME) => {
  const command = new CreateQueueCommand({
    QueueName: sqsQueueName,
    Attributes: {
      DelaySeconds: "60",
      MessageRetentionPeriod: "86400",
    },
  });

  const response = await client.send(command);

  return response;
};

export const sendMessage = async (sqsQueueUrl = SQS_QUEUE_URL) => {
  const command = new SendMessageCommand({
    QueueUrl: sqsQueueUrl,
    DelaySeconds: 10,
    MessageAttributes: {
      Title: {
        DataType: "String",
        StringValue: "The Whistler",
      },
      Author: {
        DataType: "String",
        StringValue: "John Grisham",
      },
      WeeksOn: {
        DataType: "Number",
        StringValue: "6",
      },
    },
    MessageBody:
      "Information about current NY Times fiction bestseller for week of 12/11/2016.",
  });

  const response = await client.send(command);
  
	return response;
};

const { QueueUrl } = await createNewQueue();

sendMessage(QueueUrl);
```
