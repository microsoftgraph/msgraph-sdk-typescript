import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { TeamsRequestBuilder } from "./teams";
import { TeamsServiceClientNavigationMetadata } from "./teamsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the teams singleton.
     */
    get teams(): TeamsRequestBuilder;
  }
}
extendGraphServiceClient(TeamsServiceClientNavigationMetadata);
export * from "./teamsServiceClient.js";
