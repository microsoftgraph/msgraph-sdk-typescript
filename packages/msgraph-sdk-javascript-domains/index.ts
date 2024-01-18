import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DomainsServiceClient,
  DomainsServiceClientNavigationMetadata,
} from "./domainsServiceClient";
import { DomainsRequestBuilder } from "domains";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DomainsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the domains singleton.
     */
    get domains(): DomainsRequestBuilder;
  }
}
extendGraphServiceClient(DomainsServiceClientNavigationMetadata);
export * from "./domainsServiceClient";

