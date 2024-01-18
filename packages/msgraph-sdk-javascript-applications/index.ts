import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ApplicationsServiceClient,
  ApplicationsServiceClientNavigationMetadata,
} from "./applicationsServiceClient";
import { ApplicationsRequestBuilder } from "applications";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ApplicationsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the applications singleton.
     */
    get applications(): ApplicationsRequestBuilder;
  }
}
extendGraphServiceClient(ApplicationsServiceClientNavigationMetadata);
export * from "./applicationsServiceClient";

