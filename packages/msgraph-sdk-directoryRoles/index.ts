import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DirectoryRolesRequestBuilder } from "./directoryRoles/index.js";
import { DirectoryRolesServiceClientNavigationMetadata } from "./directoryRolesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryRoles singleton.
     */
    get directoryRoles(): DirectoryRolesRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryRolesServiceClientNavigationMetadata);
export * from "./directoryRolesServiceClient.js";
