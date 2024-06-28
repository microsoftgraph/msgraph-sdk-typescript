import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DirectoryRoleTemplatesRequestBuilder } from "./directoryRoleTemplates/index.js";
import { DirectoryRoleTemplatesServiceClientNavigationMetadata } from "./directoryRoleTemplatesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryRoleTemplates singleton.
     */
    get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryRoleTemplatesServiceClientNavigationMetadata);
export * from "./directoryRoleTemplatesServiceClient.js";
