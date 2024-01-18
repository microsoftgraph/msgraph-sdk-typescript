import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ApplicationsWithAppIdServiceClient,
  ApplicationsWithAppIdServiceClientNavigationMetadata,
} from "./applicationsWithAppIdServiceClient";
import { ApplicationsWithAppIdRequestBuilder } from "applicationsWithAppId";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ApplicationsWithAppIdServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the applicationsWithAppId singleton.
     */
    get applicationsWithAppId(): ApplicationsWithAppIdRequestBuilder;
  }
}
extendGraphServiceClient(ApplicationsWithAppIdServiceClientNavigationMetadata);
export * from "./applicationsWithAppIdServiceClient";

