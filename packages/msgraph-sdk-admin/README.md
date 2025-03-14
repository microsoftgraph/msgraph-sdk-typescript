# `@microsoft/msgraph-sdk-admin`

Get started with the Microsoft Graph SDK for TypeScript by integrating the [Microsoft Graph API](https://learn.microsoft.com/graph/overview) into your TypeScript application!

This package provides a fluent API for interacting with Microsoft Graph administrative functions.

> [!NOTE]
> This package requires the `@microsoft/msgraph-sdk` package. It allows you to build applications using the [v1.0](https://learn.microsoft.com/graph/use-the-api#version) of Microsoft Graph. If you want to try the latest Microsoft Graph APIs, use our [beta SDK](https://github.com/microsoftgraph/msgraph-beta-sdk-typescript) instead.


## Installation

To install the package, use npm:

```shell
# this will install the main package
npm install @microsoft/msgraph-sdk
# this will install the authentication provider for Azure Identity / Microsoft Entra
npm install @microsoft/kiota-authentication-azure @azure/identity
# this will install the fluent API package for the administrative API paths
npm install @microsoft/msgraph-sdk-admin
```

## Usage

Here is an example of how to use the package:

```typescript
import { createGraphServiceClient, GraphRequestAdapter } from "@microsoft/msgraph-sdk";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { ClientSecretCredential } from "@azure/identity";
import "@microsoft/msgraph-sdk-admin"

// Create a credential using ClientSecretCredential
const credential = new ClientSecretCredential(
  'YOUR_TENANT_ID',
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
);

// Create an authentication provider
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["https://graph.microsoft.com/.default"]);

// Create a request adapter
const requestAdapter = new GraphRequestAdapter(authProvider);

// Create a GraphServiceClient
const graphServiceClient = createGraphServiceClient(requestAdapter);

// Use the GraphServiceClient to make requests by including the appropriate API calls package
// e.g graphServiceClient.admin.(complete your call)

```

## Documentation

For more detailed documentation, see:

* [Overview](https://learn.microsoft.com/graph/overview)
* [Collections](https://learn.microsoft.com/graph/sdks/paging)
* [Making requests](https://learn.microsoft.com/graph/sdks/create-requests)
* [Known issues](https://github.com/MicrosoftGraph/msgraph-sdk-typescript/issues)
* [Contributions](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/CONTRIBUTING.md)

## Issues

For known issues, see [issues](https://github.com/MicrosoftGraph/msgraph-sdk-typescript/issues).

## Contributions

The Microsoft Graph SDK is open for contribution. To contribute to this project, see [Contributing](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/LICENSE).

## Third-party notices

[Third-party notices](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/LICENSE)
