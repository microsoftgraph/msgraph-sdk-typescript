import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type PermissionGrantsServiceClient,
  PermissionGrantsServiceClientNavigationMetadata,
} from "./permissionGrantsServiceClient";
import { PermissionGrantsRequestBuilder } from "permissionGrants";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends PermissionGrantsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the permissionGrants singleton.
     */
    get permissionGrants(): PermissionGrantsRequestBuilder;
  }
}
extendGraphServiceClient(PermissionGrantsServiceClientNavigationMetadata);
export * from "./permissionGrantsServiceClient";

