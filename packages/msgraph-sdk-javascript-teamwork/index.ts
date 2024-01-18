import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type TeamworkServiceClient,
  TeamworkServiceClientNavigationMetadata,
} from "./teamworkServiceClient";
import { TeamworkRequestBuilder } from "teamwork";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends TeamworkServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the teamwork singleton.
     */
    get teamwork(): TeamworkRequestBuilder;
  }
}
extendGraphServiceClient(TeamworkServiceClientNavigationMetadata);
export * from "./teamworkServiceClient";

