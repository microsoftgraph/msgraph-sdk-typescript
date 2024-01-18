import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type RoleManagementServiceClient,
  RoleManagementServiceClientNavigationMetadata,
} from "./roleManagementServiceClient";
import { RoleManagementRequestBuilder } from "roleManagement";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends RoleManagementServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the roleManagement singleton.
     */
    get roleManagement(): RoleManagementRequestBuilder;
  }
}
extendGraphServiceClient(RoleManagementServiceClientNavigationMetadata);
export * from "./roleManagementServiceClient";

