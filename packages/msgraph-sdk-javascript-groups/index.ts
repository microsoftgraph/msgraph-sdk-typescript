import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type GroupsServiceClient,
  GroupsServiceClientNavigationMetadata,
} from "./groupsServiceClient";
import { GroupsRequestBuilder } from "groups";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends GroupsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groups singleton.
     */
    get groups(): GroupsRequestBuilder;
  }
}
extendGraphServiceClient(GroupsServiceClientNavigationMetadata);
export * from "./groupsServiceClient";

