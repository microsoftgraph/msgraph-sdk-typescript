import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { PoliciesRequestBuilder } from "./policies";
import { PoliciesServiceClientNavigationMetadata } from "./policiesServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the policies singleton.
     */
    get policies(): PoliciesRequestBuilder;
  }
}
extendGraphServiceClient(PoliciesServiceClientNavigationMetadata);
export * from "./policiesServiceClient";
