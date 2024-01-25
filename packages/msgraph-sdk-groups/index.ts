import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { GroupsRequestBuilder } from "./groups";
import { GroupsServiceClientNavigationMetadata } from "./groupsServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groups singleton.
     */
    get groups(): GroupsRequestBuilder;
  }
}
extendGraphServiceClient(GroupsServiceClientNavigationMetadata);
export * from "./groupsServiceClient";
