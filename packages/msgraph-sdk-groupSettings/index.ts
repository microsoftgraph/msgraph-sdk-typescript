import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { GroupSettingsRequestBuilder } from "./groupSettings";
import { GroupSettingsServiceClientNavigationMetadata } from "./groupSettingsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupSettings singleton.
     */
    get groupSettings(): GroupSettingsRequestBuilder;
  }
}
extendGraphServiceClient(GroupSettingsServiceClientNavigationMetadata);
export * from "./groupSettingsServiceClient.js";
