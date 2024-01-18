import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type IdentityProtectionServiceClient,
  IdentityProtectionServiceClientNavigationMetadata,
} from "./identityProtectionServiceClient";
import { IdentityProtectionRequestBuilder } from "identityProtection";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends IdentityProtectionServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identityProtection singleton.
     */
    get identityProtection(): IdentityProtectionRequestBuilder;
  }
}
extendGraphServiceClient(IdentityProtectionServiceClientNavigationMetadata);
export * from "./identityProtectionServiceClient";

