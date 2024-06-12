import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SecurityRequestBuilder } from "./security/index.js";
import { SecurityServiceClientNavigationMetadata } from "./securityServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the security singleton.
     */
    get security(): SecurityRequestBuilder;
  }
}
extendGraphServiceClient(SecurityServiceClientNavigationMetadata);
export * from "./securityServiceClient.js";
