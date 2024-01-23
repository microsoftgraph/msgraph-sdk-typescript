import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { RoleManagementRequestBuilder } from "roleManagement";

import { RoleManagementServiceClientNavigationMetadata } from "./roleManagementServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the roleManagement singleton.
     */
    get roleManagement(): RoleManagementRequestBuilder;
  }
}
extendGraphServiceClient(RoleManagementServiceClientNavigationMetadata);
export * from "./roleManagementServiceClient";
