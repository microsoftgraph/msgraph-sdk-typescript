import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { IdentityProtectionRequestBuilder } from "./identityProtection";
import { IdentityProtectionServiceClientNavigationMetadata } from "./identityProtectionServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identityProtection singleton.
     */
    get identityProtection(): IdentityProtectionRequestBuilder;
  }
}
extendGraphServiceClient(IdentityProtectionServiceClientNavigationMetadata);
export * from "./identityProtectionServiceClient.js";
