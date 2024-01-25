import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { GroupLifecyclePoliciesRequestBuilder } from "./groupLifecyclePolicies";
import { GroupLifecyclePoliciesServiceClientNavigationMetadata } from "./groupLifecyclePoliciesServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupLifecyclePolicies singleton.
     */
    get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder;
  }
}
extendGraphServiceClient(GroupLifecyclePoliciesServiceClientNavigationMetadata);
export * from "./groupLifecyclePoliciesServiceClient";
