import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { TenantRelationshipsRequestBuilder } from "./tenantRelationships";
import { TenantRelationshipsServiceClientNavigationMetadata } from "./tenantRelationshipsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the tenantRelationships singleton.
     */
    get tenantRelationships(): TenantRelationshipsRequestBuilder;
  }
}
extendGraphServiceClient(TenantRelationshipsServiceClientNavigationMetadata);
export * from "./tenantRelationshipsServiceClient.js";
