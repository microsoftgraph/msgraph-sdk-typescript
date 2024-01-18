import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type TeamsTemplatesServiceClient,
  TeamsTemplatesServiceClientNavigationMetadata,
} from "./teamsTemplatesServiceClient";
import { TeamsTemplatesRequestBuilder } from "teamsTemplates";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends TeamsTemplatesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the teamsTemplates singleton.
     */
    get teamsTemplates(): TeamsTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(TeamsTemplatesServiceClientNavigationMetadata);
export * from "./teamsTemplatesServiceClient";

