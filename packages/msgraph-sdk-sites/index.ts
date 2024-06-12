import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SitesRequestBuilder } from "./sites/index.js";
import { SitesServiceClientNavigationMetadata } from "./sitesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the sites singleton.
     */
    get sites(): SitesRequestBuilder;
  }
}
extendGraphServiceClient(SitesServiceClientNavigationMetadata);
export * from "./sitesServiceClient.js";
