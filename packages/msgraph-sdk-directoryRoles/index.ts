import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DirectoryRolesRequestBuilder } from "./directoryRoles";
import { DirectoryRolesServiceClientNavigationMetadata } from "./directoryRolesServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryRoles singleton.
     */
    get directoryRoles(): DirectoryRolesRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryRolesServiceClientNavigationMetadata);
export * from "./directoryRolesServiceClient";
