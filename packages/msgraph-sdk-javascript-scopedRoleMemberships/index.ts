import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ScopedRoleMembershipsServiceClient,
  ScopedRoleMembershipsServiceClientNavigationMetadata,
} from "./scopedRoleMembershipsServiceClient";
import { ScopedRoleMembershipsRequestBuilder } from "scopedRoleMemberships";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ScopedRoleMembershipsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the scopedRoleMemberships singleton.
     */
    get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder;
  }
}
extendGraphServiceClient(ScopedRoleMembershipsServiceClientNavigationMetadata);
export * from "./scopedRoleMembershipsServiceClient";

