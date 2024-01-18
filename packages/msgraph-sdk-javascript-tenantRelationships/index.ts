import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type TenantRelationshipsServiceClient,
  TenantRelationshipsServiceClientNavigationMetadata,
} from "./tenantRelationshipsServiceClient";
import { TenantRelationshipsRequestBuilder } from "tenantRelationships";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends TenantRelationshipsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the tenantRelationships singleton.
     */
    get tenantRelationships(): TenantRelationshipsRequestBuilder;
  }
}
extendGraphServiceClient(TenantRelationshipsServiceClientNavigationMetadata);
export * from "./tenantRelationshipsServiceClient";

