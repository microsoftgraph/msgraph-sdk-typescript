import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { AuthenticationMethodsPolicyRequestBuilder } from "./authenticationMethodsPolicy";
import { AuthenticationMethodsPolicyServiceClientNavigationMetadata } from "./authenticationMethodsPolicyServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the authenticationMethodsPolicy singleton.
     */
    get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder;
  }
}
extendGraphServiceClient(
  AuthenticationMethodsPolicyServiceClientNavigationMetadata,
);
export * from "./authenticationMethodsPolicyServiceClient.js";
