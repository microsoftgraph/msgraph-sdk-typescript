import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { OrganizationRequestBuilder } from "./organization";
import { OrganizationServiceClientNavigationMetadata } from "./organizationServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the organization singleton.
     */
    get organization(): OrganizationRequestBuilder;
  }
}
extendGraphServiceClient(OrganizationServiceClientNavigationMetadata);
export * from "./organizationServiceClient";
