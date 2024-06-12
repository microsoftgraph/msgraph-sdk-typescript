import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { IdentityRequestBuilder } from "./identity/index.js";
import { IdentityServiceClientNavigationMetadata } from "./identityServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identity singleton.
     */
    get identity(): IdentityRequestBuilder;
  }
}
extendGraphServiceClient(IdentityServiceClientNavigationMetadata);
export * from "./identityServiceClient.js";
