import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DirectoryRoleTemplatesServiceClient,
  DirectoryRoleTemplatesServiceClientNavigationMetadata,
} from "./directoryRoleTemplatesServiceClient";
import { DirectoryRoleTemplatesRequestBuilder } from "directoryRoleTemplates";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DirectoryRoleTemplatesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryRoleTemplates singleton.
     */
    get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryRoleTemplatesServiceClientNavigationMetadata);
export * from "./directoryRoleTemplatesServiceClient";

