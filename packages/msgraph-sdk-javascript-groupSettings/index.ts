import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type GroupSettingsServiceClient,
  GroupSettingsServiceClientNavigationMetadata,
} from "./groupSettingsServiceClient";
import { GroupSettingsRequestBuilder } from "groupSettings";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends GroupSettingsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupSettings singleton.
     */
    get groupSettings(): GroupSettingsRequestBuilder;
  }
}
extendGraphServiceClient(GroupSettingsServiceClientNavigationMetadata);
export * from "./groupSettingsServiceClient";

