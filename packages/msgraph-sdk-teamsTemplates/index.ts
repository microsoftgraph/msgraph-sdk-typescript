import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { TeamsTemplatesRequestBuilder } from "./teamsTemplates/index.js";
import { TeamsTemplatesServiceClientNavigationMetadata } from "./teamsTemplatesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the teamsTemplates singleton.
     */
    get teamsTemplates(): TeamsTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(TeamsTemplatesServiceClientNavigationMetadata);
export * from "./teamsTemplatesServiceClient.js";
