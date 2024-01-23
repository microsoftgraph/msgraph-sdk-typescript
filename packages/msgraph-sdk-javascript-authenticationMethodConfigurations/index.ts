import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { AuthenticationMethodConfigurationsRequestBuilder } from "./authenticationMethodConfigurations";
import { AuthenticationMethodConfigurationsServiceClientNavigationMetadata } from "./authenticationMethodConfigurationsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
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
export * from "./authenticationMethodConfigurationsServiceClient";
