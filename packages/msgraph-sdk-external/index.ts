import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ExternalRequestBuilder } from "./external/index.js";
import { ExternalServiceClientNavigationMetadata } from "./externalServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the external singleton.
     */
    get external(): ExternalRequestBuilder;
  }
}
extendGraphServiceClient(ExternalServiceClientNavigationMetadata);
export * from "./externalServiceClient.js";
