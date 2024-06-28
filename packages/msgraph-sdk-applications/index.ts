import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ApplicationsRequestBuilder } from "./applications/index.js";
import { ApplicationsServiceClientNavigationMetadata } from "./applicationsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the applications singleton.
     */
    get applications(): ApplicationsRequestBuilder;
  }
}
extendGraphServiceClient(ApplicationsServiceClientNavigationMetadata);
export * from "./applicationsServiceClient.js";
