import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { SitesRequestBuilder } from "sites";

import { SitesServiceClientNavigationMetadata } from "./sitesServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the sites singleton.
     */
    get sites(): SitesRequestBuilder;
  }
}
extendGraphServiceClient(SitesServiceClientNavigationMetadata);
export * from "./sitesServiceClient";
