import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { SecurityRequestBuilder } from "security";

import { SecurityServiceClientNavigationMetadata } from "./securityServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the security singleton.
     */
    get security(): SecurityRequestBuilder;
  }
}
extendGraphServiceClient(SecurityServiceClientNavigationMetadata);
export * from "./securityServiceClient";
