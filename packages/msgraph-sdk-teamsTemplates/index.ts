import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { TeamsTemplatesRequestBuilder } from "./teamsTemplates";
import { TeamsTemplatesServiceClientNavigationMetadata } from "./teamsTemplatesServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the teamsTemplates singleton.
     */
    get teamsTemplates(): TeamsTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(TeamsTemplatesServiceClientNavigationMetadata);
export * from "./teamsTemplatesServiceClient";
