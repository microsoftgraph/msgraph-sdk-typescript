import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { OrganizationRequestBuilder } from "./organization";
import { OrganizationServiceClientNavigationMetadata } from "./organizationServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the organization singleton.
     */
    get organization(): OrganizationRequestBuilder;
  }
}
extendGraphServiceClient(OrganizationServiceClientNavigationMetadata);
export * from "./organizationServiceClient.js";
