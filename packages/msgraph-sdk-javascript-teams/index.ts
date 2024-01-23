import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { TeamsRequestBuilder } from "teams";

import { TeamsServiceClientNavigationMetadata } from "./teamsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the teams singleton.
     */
    get teams(): TeamsRequestBuilder;
  }
}
extendGraphServiceClient(TeamsServiceClientNavigationMetadata);
export * from "./teamsServiceClient";
