import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AuthenticationMethodConfigurationsServiceClient,
  AuthenticationMethodConfigurationsServiceClientNavigationMetadata,
} from "./authenticationMethodConfigurationsServiceClient";
import { AuthenticationMethodConfigurationsRequestBuilder } from "authenticationMethodConfigurations";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends AuthenticationMethodConfigurationsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the authenticationMethodConfigurations singleton.
     */
    get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder;
  }
}
extendGraphServiceClient(AuthenticationMethodConfigurationsServiceClientNavigationMetadata);
export * from "./authenticationMethodConfigurationsServiceClient";

