import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { PlacesRequestBuilder } from "places";

import { PlacesServiceClientNavigationMetadata } from "./placesServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the places singleton.
     */
    get places(): PlacesRequestBuilder;
  }
}
extendGraphServiceClient(PlacesServiceClientNavigationMetadata);
export * from "./placesServiceClient";
