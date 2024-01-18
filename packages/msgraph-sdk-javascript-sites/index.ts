import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type SitesServiceClient,
  SitesServiceClientNavigationMetadata,
} from "./sitesServiceClient";
import { SitesRequestBuilder } from "sites";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends SitesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the sites singleton.
     */
    get sites(): SitesRequestBuilder;
  }
}
extendGraphServiceClient(SitesServiceClientNavigationMetadata);
export * from "./sitesServiceClient";

