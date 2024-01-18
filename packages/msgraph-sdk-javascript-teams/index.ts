import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type TeamsServiceClient,
  TeamsServiceClientNavigationMetadata,
} from "./teamsServiceClient";
import { TeamsRequestBuilder } from "teams";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends TeamsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the teams singleton.
     */
    get teams(): TeamsRequestBuilder;
  }
}
extendGraphServiceClient(TeamsServiceClientNavigationMetadata);
export * from "./teamsServiceClient";

