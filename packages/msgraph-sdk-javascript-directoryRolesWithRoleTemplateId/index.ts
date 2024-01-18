import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DirectoryRolesWithRoleTemplateIdServiceClient,
  DirectoryRolesWithRoleTemplateIdServiceClientNavigationMetadata,
} from "./directoryRolesWithRoleTemplateIdServiceClient";
import { DirectoryRolesWithRoleTemplateIdRequestBuilder } from "directoryRolesWithRoleTemplateId";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DirectoryRolesWithRoleTemplateIdServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryRolesWithRoleTemplateId singleton.
     */
    get directoryRolesWithRoleTemplateId(): DirectoryRolesWithRoleTemplateIdRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryRolesWithRoleTemplateIdServiceClientNavigationMetadata);
export * from "./directoryRolesWithRoleTemplateIdServiceClient";

