import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type IdentityProvidersServiceClient,
  IdentityProvidersServiceClientNavigationMetadata,
} from "./identityProvidersServiceClient";
import { IdentityProvidersRequestBuilder } from "identityProviders";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends IdentityProvidersServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identityProviders singleton.
     */
    get identityProviders(): IdentityProvidersRequestBuilder;
  }
}
extendGraphServiceClient(IdentityProvidersServiceClientNavigationMetadata);
export * from "./identityProvidersServiceClient";

