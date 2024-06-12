import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { IdentityProvidersRequestBuilder } from "./identityProviders/index.js";
import { IdentityProvidersServiceClientNavigationMetadata } from "./identityProvidersServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identityProviders singleton.
     */
    get identityProviders(): IdentityProvidersRequestBuilder;
  }
}
extendGraphServiceClient(IdentityProvidersServiceClientNavigationMetadata);
export * from "./identityProvidersServiceClient.js";
