import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { PermissionGrantsRequestBuilder } from "./permissionGrants";
import { PermissionGrantsServiceClientNavigationMetadata } from "./permissionGrantsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the permissionGrants singleton.
     */
    get permissionGrants(): PermissionGrantsRequestBuilder;
  }
}
extendGraphServiceClient(PermissionGrantsServiceClientNavigationMetadata);
export * from "./permissionGrantsServiceClient.js";
