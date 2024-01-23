import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { DirectoryRoleTemplatesRequestBuilder } from "directoryRoleTemplates";

import { DirectoryRoleTemplatesServiceClientNavigationMetadata } from "./directoryRoleTemplatesServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryRoleTemplates singleton.
     */
    get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryRoleTemplatesServiceClientNavigationMetadata);
export * from "./directoryRoleTemplatesServiceClient";
