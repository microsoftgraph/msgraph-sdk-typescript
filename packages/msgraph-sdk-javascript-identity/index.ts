import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { IdentityRequestBuilder } from "identity";

import { IdentityServiceClientNavigationMetadata } from "./identityServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identity singleton.
     */
    get identity(): IdentityRequestBuilder;
  }
}
extendGraphServiceClient(IdentityServiceClientNavigationMetadata);
export * from "./identityServiceClient";
