import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DomainsRequestBuilder } from "./domains";
import { DomainsServiceClientNavigationMetadata } from "./domainsServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the domains singleton.
     */
    get domains(): DomainsRequestBuilder;
  }
}
extendGraphServiceClient(DomainsServiceClientNavigationMetadata);
export * from "./domainsServiceClient";
