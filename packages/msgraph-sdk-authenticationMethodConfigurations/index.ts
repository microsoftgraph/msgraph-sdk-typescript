import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { AuthenticationMethodConfigurationsRequestBuilder } from "./authenticationMethodConfigurations";
import { AuthenticationMethodConfigurationsServiceClientNavigationMetadata } from "./authenticationMethodConfigurationsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the authenticationMethodConfigurations singleton.
     */
    get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder;
  }
}
extendGraphServiceClient(
  AuthenticationMethodConfigurationsServiceClientNavigationMetadata,
);
export * from "./authenticationMethodConfigurationsServiceClient.js";
