import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type PlacesServiceClient,
  PlacesServiceClientNavigationMetadata,
} from "./placesServiceClient";
import { PlacesRequestBuilder } from "places";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends PlacesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the places singleton.
     */
    get places(): PlacesRequestBuilder;
  }
}
extendGraphServiceClient(PlacesServiceClientNavigationMetadata);
export * from "./placesServiceClient";

