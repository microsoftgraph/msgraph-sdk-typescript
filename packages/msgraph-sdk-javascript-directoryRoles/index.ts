import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DirectoryRolesServiceClient,
  DirectoryRolesServiceClientNavigationMetadata,
} from "./directoryRolesServiceClient";
import { DirectoryRolesRequestBuilder } from "directoryRoles";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DirectoryRolesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryRoles singleton.
     */
    get directoryRoles(): DirectoryRolesRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryRolesServiceClientNavigationMetadata);
export * from "./directoryRolesServiceClient";

