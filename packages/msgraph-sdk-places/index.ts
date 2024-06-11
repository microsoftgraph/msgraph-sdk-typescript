import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { PlacesRequestBuilder } from "./places";
import { PlacesServiceClientNavigationMetadata } from "./placesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the places singleton.
     */
    get places(): PlacesRequestBuilder;
  }
}
extendGraphServiceClient(PlacesServiceClientNavigationMetadata);
export * from "./placesServiceClient.js";
