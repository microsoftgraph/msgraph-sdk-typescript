import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { GroupSettingTemplatesRequestBuilder } from "./groupSettingTemplates/index.js";
import { GroupSettingTemplatesServiceClientNavigationMetadata } from "./groupSettingTemplatesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupSettingTemplates singleton.
     */
    get groupSettingTemplates(): GroupSettingTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(GroupSettingTemplatesServiceClientNavigationMetadata);
export * from "./groupSettingTemplatesServiceClient.js";
