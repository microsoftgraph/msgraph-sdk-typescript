import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type OrganizationServiceClient,
  OrganizationServiceClientNavigationMetadata,
} from "./organizationServiceClient";
import { OrganizationRequestBuilder } from "organization";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends OrganizationServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the organization singleton.
     */
    get organization(): OrganizationRequestBuilder;
  }
}
extendGraphServiceClient(OrganizationServiceClientNavigationMetadata);
export * from "./organizationServiceClient";

