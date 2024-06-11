import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { RoleManagementRequestBuilder } from "./roleManagement";
import { RoleManagementServiceClientNavigationMetadata } from "./roleManagementServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the roleManagement singleton.
     */
    get roleManagement(): RoleManagementRequestBuilder;
  }
}
extendGraphServiceClient(RoleManagementServiceClientNavigationMetadata);
export * from "./roleManagementServiceClient.js";
