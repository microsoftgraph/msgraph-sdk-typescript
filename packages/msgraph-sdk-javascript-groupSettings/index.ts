import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { GroupSettingsRequestBuilder } from "./groupSettings";
import { GroupSettingsServiceClientNavigationMetadata } from "./groupSettingsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupSettings singleton.
     */
    get groupSettings(): GroupSettingsRequestBuilder;
  }
}
extendGraphServiceClient(GroupSettingsServiceClientNavigationMetadata);
export * from "./groupSettingsServiceClient";
