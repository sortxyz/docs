---
title: "API Keys"
slug: "api-keys"
excerpt: "Use API keys to integrate with the Sort REST API"
hidden: false
createdAt: "Fri Aug 30 2024 15:46:11 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Aug 30 2024 19:02:07 GMT+0000 (Coordinated Universal Time)"
---
:::info
This page is for software developers.
:::

## Create an API key

To integrate with the Sort REST API, you'll need an API key. To get one:

1. Log-in to your sort.xyz account
2. Click on your avatar
3. Click "Account Settings"
4. Click on "API Keys" in the navigation menu
5. Click the green "New API Key" button
6. Enter a summary of how the key will be used so when you come back later, you'll know which key is which
7. Copy the new key as you will not be able to see it again

:::warning
Always store API keys in a secure place. The holder of the API key has **full access** to your account.
:::

## Using an API key

When issuing HTTP requests to the Sort REST API, you'll always set the `x-api-key` request header to your API key. For example, if using `curl` this looks like:

```shell
curl 'https://api.sort.xyz/v2/my/profile' \
  --header 'x-api-key: YOUR_API_KEY' \
  --header 'accept: application/json'
```

Run the above command to receive your first response from the Sort REST API.

## API Documentation

To learn about what else you can do with the Sort REST API, check out our full [API docs](https://api.sort.xyz/docs).
