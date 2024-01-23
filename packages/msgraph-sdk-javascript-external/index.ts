import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { ExternalRequestBuilder } from "./external";
import { ExternalServiceClientNavigationMetadata } from "./externalServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the external singleton.
     */
    get external(): ExternalRequestBuilder;
  }
}
extendGraphServiceClient(ExternalServiceClientNavigationMetadata);
export * from "./externalServiceClient";
