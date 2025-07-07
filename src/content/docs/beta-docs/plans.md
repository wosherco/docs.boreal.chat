---
title: Pricing and Plans
description: Overview of boreal.chat plans and pricing. What's a CU? What's a message?
---

After much engineering, we figure out the best pricing model, simple, and easy to understand.

First of all, we defined different units of measure, that will work for everyone (might be adjusted in the future):

- **CU** - Compute Unit. It's a token, multiplied by the relative difference between $2.50/M tokens:

```math
CU = 1 token * (Model Pricing / $2.50)
```

- **Message** - A message is a single message sent to the model. Under the hood we assume a message will be `4,000` tokens. (this might change in the future for better).

## Plans

You can use boreal.chat for free, but your limited to usage based pricing, and to basic chat features. You can use boreal.chat for free and get all those features by self-hosting it yourself for personal use.

We offer 2 paid plans:

- Premium - 6€/month

  Includes all the advanced chatting features, but it's usage-based, and limted to 20Gb of storage.

- Unlimited - 12€/month

  Includes all the advanced chatting features, unlimited storage, and unlimited messages (at a fair rate-limit).

## Why this pricing model?

boreal.chat might just seem a chatting platform, but it's more than that under the hood. What everyone understands as a message, it's actually multiple messages, calling internal tools for searching and advanced analysis of data, to get the best answer to any question.
