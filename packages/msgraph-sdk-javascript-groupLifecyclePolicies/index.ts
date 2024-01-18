import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type GroupLifecyclePoliciesServiceClient,
  GroupLifecyclePoliciesServiceClientNavigationMetadata,
} from "./groupLifecyclePoliciesServiceClient";
import { GroupLifecyclePoliciesRequestBuilder } from "groupLifecyclePolicies";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends GroupLifecyclePoliciesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the groupLifecyclePolicies singleton.
     */
    get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder;
  }
}
extendGraphServiceClient(GroupLifecyclePoliciesServiceClientNavigationMetadata);
export * from "./groupLifecyclePoliciesServiceClient";

