# Microsoft Graph SDK for Typescript

Get started with the Microsoft Graph SDK for Typescript by integrating the [Microsoft Graph API](https://docs.microsoft.com/graph/overview) into your Typescript application!

> **Note:** this SDK allows you to build applications using the [v1.0](https://docs.microsoft.com/graph/use-the-api#version) of Microsoft Graph. If you want to try the latest Microsoft Graph APIs.
>
> **Note:** the Microsoft Graph Typescript SDK is currently in Pre-Release.

## 1. Installation

```typescript
npm install @microsoft/msgraph-sdk-typescript
```

## 2. Getting started

### 2.1 Register your application

Register your application by following the steps at [Register your app with the Microsoft Identity Platform](https://docs.microsoft.com/graph/auth-register-app-v2).

### 2.2 Create an AuthenticationProvider object

An instance of the **GraphServiceClient** class handles building client. To create a new instance of this class, you need to provide an instance of **AuthenticationProvider**, which can authenticate requests to Microsoft Graph.

For an example of how to get an authentication provider, see [choose a Microsoft Graph authentication provider](https://docs.microsoft.com/graph/sdks/choose-authentication-providers?tabs=typescript).

> Note: we are working to add the getting started information for Typescript to our public documentation, in the meantime the following sample should help you getting started.

```typescript
const authProvider = new AzureIdentityAuthenticationProvider(new ClientSecretCredential("tenantId", "clientId", "clientSecret"));
const requestAdapter = new FetchRequestAdapter(authProvider);  

```

### 2.3 Get a Graph Service Client Adapter object

You must get a **GraphServiceClient** object to make requests against the service.

```typescript
const graphServiceClient = new GraphServiceClient(requestAdapter);
```

## 3. Make requests against the service

After you have a **GraphServiceClient** that is authenticated, you can begin making calls against the service. The requests against the service look like our [REST API](https://docs.microsoft.com/graph/api/overview?view=graph-rest-1.0).

### 3.1 Get the user's rooms

To retrieve the user's rooms:

```typescript
const graphServiceClient = new GraphServiceClient(requestAdapter);

const result = async () => {
	await graphServiceClient.me.findRooms().get();
}
```

## 4. Getting results that span across multiple pages

Items in a collection response can span across multiple pages. To get the complete set of items in the collection, your application must make additional calls to get the subsequent pages until no more next link is provided in the response.

## 5. Documentation

For more detailed documentation, see:

* [Overview](https://docs.microsoft.com/graph/overview)
* [Collections](https://docs.microsoft.com/graph/sdks/paging)
* [Making requests](https://docs.microsoft.com/graph/sdks/create-requests)
* [Known issues](https://github.com/MicrosoftGraph/msgraph-sdk-typescript/issues)
* [Contributions](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/CONTRIBUTING.md)

## 6. Issues

For known issues, see [issues](https://github.com/MicrosoftGraph/msgraph-sdk-typescript/issues).

## 7. Contributions

The Microsoft Graph SDK is open for contribution. To contribute to this project, see [Contributing](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/CONTRIBUTING.md).

## 8. License

Copyright (c) Microsoft Corporation. All Rights Reserved. Licensed under the [MIT license](LICENSE).

## 9. Third-party notices

[Third-party notices](THIRD%20PARTY%20NOTICES)
