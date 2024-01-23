import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { ScopedRoleMembershipsRequestBuilder } from "./scopedRoleMemberships";
import { ScopedRoleMembershipsServiceClientNavigationMetadata } from "./scopedRoleMembershipsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the scopedRoleMemberships singleton.
     */
    get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder;
  }
}
extendGraphServiceClient(ScopedRoleMembershipsServiceClientNavigationMetadata);
export * from "./scopedRoleMembershipsServiceClient";
