import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { IdentityProtectionRequestBuilder } from "./identityProtection";
import { IdentityProtectionServiceClientNavigationMetadata } from "./identityProtectionServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identityProtection singleton.
     */
    get identityProtection(): IdentityProtectionRequestBuilder;
  }
}
extendGraphServiceClient(IdentityProtectionServiceClientNavigationMetadata);
export * from "./identityProtectionServiceClient";
