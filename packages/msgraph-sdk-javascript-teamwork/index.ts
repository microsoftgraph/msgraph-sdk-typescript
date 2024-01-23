import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { TeamworkRequestBuilder } from "./teamwork";
import { TeamworkServiceClientNavigationMetadata } from "./teamworkServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the teamwork singleton.
     */
    get teamwork(): TeamworkRequestBuilder;
  }
}
extendGraphServiceClient(TeamworkServiceClientNavigationMetadata);
export * from "./teamworkServiceClient";
