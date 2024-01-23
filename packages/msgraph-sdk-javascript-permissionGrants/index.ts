import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { PermissionGrantsRequestBuilder } from "./permissionGrants";
import { PermissionGrantsServiceClientNavigationMetadata } from "./permissionGrantsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the permissionGrants singleton.
     */
    get permissionGrants(): PermissionGrantsRequestBuilder;
  }
}
extendGraphServiceClient(PermissionGrantsServiceClientNavigationMetadata);
export * from "./permissionGrantsServiceClient";
