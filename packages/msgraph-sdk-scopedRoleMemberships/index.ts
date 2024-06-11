import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ScopedRoleMembershipsRequestBuilder } from "./scopedRoleMemberships";
import { ScopedRoleMembershipsServiceClientNavigationMetadata } from "./scopedRoleMembershipsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the scopedRoleMemberships singleton.
     */
    get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder;
  }
}
extendGraphServiceClient(ScopedRoleMembershipsServiceClientNavigationMetadata);
export * from "./scopedRoleMembershipsServiceClient.js";
