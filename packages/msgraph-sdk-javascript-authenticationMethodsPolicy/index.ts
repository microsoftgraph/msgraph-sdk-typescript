import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AuthenticationMethodsPolicyServiceClient,
  AuthenticationMethodsPolicyServiceClientNavigationMetadata,
} from "./authenticationMethodsPolicyServiceClient";
import { AuthenticationMethodsPolicyRequestBuilder } from "authenticationMethodsPolicy";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends AuthenticationMethodsPolicyServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the authenticationMethodsPolicy singleton.
     */
    get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder;
  }
}
extendGraphServiceClient(AuthenticationMethodsPolicyServiceClientNavigationMetadata);
export * from "./authenticationMethodsPolicyServiceClient";

