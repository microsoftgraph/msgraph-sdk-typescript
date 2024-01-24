import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { GroupSettingTemplatesRequestBuilder } from "./groupSettingTemplates";
import { GroupSettingTemplatesServiceClientNavigationMetadata } from "./groupSettingTemplatesServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupSettingTemplates singleton.
     */
    get groupSettingTemplates(): GroupSettingTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(GroupSettingTemplatesServiceClientNavigationMetadata);
export * from "./groupSettingTemplatesServiceClient";
