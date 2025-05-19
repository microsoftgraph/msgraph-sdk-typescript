# `@microsoft/msgraph-sdk-$packageName`

Get started with the Microsoft Graph SDK for TypeScript by integrating the [Microsoft Graph API](https://learn.microsoft.com/graph/overview) into your TypeScript application!

This package provides a fluent API for interacting with Microsoft Graph administrative functions.

> [!NOTE]
> This package requires the `@microsoft/msgraph-sdk` package. It allows you to build applications using the [v1.0](https://learn.microsoft.com/graph/use-the-api#version) of Microsoft Graph. If you want to try the latest Microsoft Graph APIs, use our [beta SDK](https://github.com/microsoftgraph/msgraph-beta-sdk-typescript) instead.


## 1. Installation

To install the package, use npm:

```shell
# this will install the main package
npm install @microsoft/msgraph-sdk
# this will install the authentication provider for Azure Identity / Microsoft Entra
npm install @microsoft/kiota-authentication-azure @azure/identity
# this will install the fluent API package for the administrative API paths
npm install @microsoft/msgraph-sdk-$packageName
```

## 2. Getting started

> Note: we are working to add the getting started information for Typescript to our public documentation, in the meantime the following sample should help you getting started.

### 2.1 Register your application

Register your application by following the steps at [Register your app with the Microsoft Identity Platform](https://learn.microsoft.com/graph/auth-register-app-v2).

### 2.2 Create an AuthenticationProvider object

An instance of the **GraphServiceClient** class handles building client. To create a new instance of this class, you need to provide an instance of **AuthenticationProvider**, which can authenticate requests to Microsoft Graph.

<!-- TODO restore that and remove the snippets below once the SDK hits GA and the public documentation has been updated -->
<!-- For an example of how to get an authentication provider, see [choose a Microsoft Graph authentication provider](https://learn.microsoft.com/graph/sdks/choose-authentication-providers?tabs=typescript). -->

#### 2.2.1 Authorization Code Provider

```TypeScript
// @azure/identity
const credential = new AuthorizationCodeCredential(
  'YOUR_TENANT_ID',
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'AUTHORIZATION_CODE',
  'REDIRECT_URL',
);

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["User.Read"]);
```

#### 2.2.2 Client Credentials Provider

##### With a certificate

```TypeScript
// @azure/identity
const credential = new ClientCertificateCredential(
  'YOUR_TENANT_ID',
  'YOUR_CLIENT_ID',
  'YOUR_CERTIFICATE_PATH',
);

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["https://graph.microsoft.com/.default"]);
```

##### With a secret

```TypeScript
// @azure/identity
const credential = new ClientSecretCredential(
  'YOUR_TENANT_ID',
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
);

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["https://graph.microsoft.com/.default"]);
```

#### 2.2.3 On-behalf-of provider

```TypeScript
// @azure/identity
const credential = new OnBehalfOfCredential({
  tenantId: 'YOUR_TENANT_ID',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  userAssertionToken: 'JWT_TOKEN_TO_EXCHANGE',
});

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["https://graph.microsoft.com/.default"]);
```

#### 2.2.4 Device code provider

```TypeScript
// @azure/identity
const credential = new DeviceCodeCredential({
  tenantId: 'YOUR_TENANT_ID',
  clientId: 'YOUR_CLIENT_ID',
  userPromptCallback: (info) => {
    console.log(info.message);
  },
});

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["User.Read"]);
```

#### 2.2.5 Interactive provider

```TypeScript
// @azure/identity
const credential = new InteractiveBrowserCredential({
  tenantId: 'YOUR_TENANT_ID',
  clientId: 'YOUR_CLIENT_ID',
  redirectUri: 'http://localhost',
});

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["User.Read"]);
```

#### 2.2.6 Username/password provider

```TypeScript
// @azure/identity
const credential = new UsernamePasswordCredential(
  'YOUR_TENANT_ID',
  'YOUR_CLIENT_ID',
  'YOUR_USER_NAME',
  'YOUR_PASSWORD',
);

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["User.Read"]);
```

### 2.3 Get a Graph Service Client Adapter object

You must get a **GraphServiceClient** object to make requests against the service.

```typescript
const requestAdapter = new GraphRequestAdapter(authProvider);
const graphServiceClient = createGraphServiceClient(requestAdapter);
```

## 3. Make requests against the service

After you have a **GraphServiceClient** that is authenticated, you can begin making calls against the service. The requests against the service look like our [REST API](https://learn.microsoft.com/graph/api/overview?view=graph-rest-1.0).

### 3.1 Get user's detailed information

To retrieve the user's detailed information:

```typescript
import { createGraphServiceClient, GraphRequestAdapter } from "@microsoft/msgraph-sdk";
import "@microsoft/msgraph-sdk-$packageName"

const requestAdapter = new GraphRequestAdapter(authProvider);
const graphServiceClient = createGraphServiceClient(requestAdapter);

const $packageName = graphServiceClient.$packageName.get();
```

## 4. Documentation

For more detailed documentation, see:

* [Overview](https://learn.microsoft.com/graph/overview)
* [Collections](https://learn.microsoft.com/graph/sdks/paging)
* [Making requests](https://learn.microsoft.com/graph/sdks/create-requests)
* [Known issues](https://github.com/MicrosoftGraph/msgraph-sdk-typescript/issues)
* [Contributions](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/CONTRIBUTING.md)

## 5. Issues

For known issues, see [issues](https://github.com/MicrosoftGraph/msgraph-sdk-typescript/issues).

## 6. Contributions

The Microsoft Graph SDK is open for contribution. To contribute to this project, see [Contributing](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/CONTRIBUTING.md).

## 7. License

Licensed under the [MIT license](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/LICENSE).

## 8. Third-party notices

[Third-party notices](https://github.com/microsoftgraph/msgraph-sdk-typescript/blob/main/LICENSE)
