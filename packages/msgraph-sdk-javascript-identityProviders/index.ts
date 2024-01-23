import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { IdentityProvidersRequestBuilder } from "./identityProviders";
import { IdentityProvidersServiceClientNavigationMetadata } from "./identityProvidersServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identityProviders singleton.
     */
    get identityProviders(): IdentityProvidersRequestBuilder;
  }
}
extendGraphServiceClient(IdentityProvidersServiceClientNavigationMetadata);
export * from "./identityProvidersServiceClient";
