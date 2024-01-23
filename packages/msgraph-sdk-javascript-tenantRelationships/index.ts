import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { TenantRelationshipsRequestBuilder } from "tenantRelationships";

import { TenantRelationshipsServiceClientNavigationMetadata } from "./tenantRelationshipsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the tenantRelationships singleton.
     */
    get tenantRelationships(): TenantRelationshipsRequestBuilder;
  }
}
extendGraphServiceClient(TenantRelationshipsServiceClientNavigationMetadata);
export * from "./tenantRelationshipsServiceClient";
