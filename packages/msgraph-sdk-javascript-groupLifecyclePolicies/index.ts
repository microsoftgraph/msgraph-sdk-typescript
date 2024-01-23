import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { GroupLifecyclePoliciesRequestBuilder } from "groupLifecyclePolicies";

import { GroupLifecyclePoliciesServiceClientNavigationMetadata } from "./groupLifecyclePoliciesServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupLifecyclePolicies singleton.
     */
    get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder;
  }
}
extendGraphServiceClient(GroupLifecyclePoliciesServiceClientNavigationMetadata);
export * from "./groupLifecyclePoliciesServiceClient";
