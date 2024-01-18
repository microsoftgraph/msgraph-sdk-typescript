import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type GroupSettingTemplatesServiceClient,
  GroupSettingTemplatesServiceClientNavigationMetadata,
} from "./groupSettingTemplatesServiceClient";
import { GroupSettingTemplatesRequestBuilder } from "groupSettingTemplates";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends GroupSettingTemplatesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupSettingTemplates singleton.
     */
    get groupSettingTemplates(): GroupSettingTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(GroupSettingTemplatesServiceClientNavigationMetadata);
export * from "./groupSettingTemplatesServiceClient";

