import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type PoliciesServiceClient,
  PoliciesServiceClientNavigationMetadata,
} from "./policiesServiceClient";
import { PoliciesRequestBuilder } from "policies";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends PoliciesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the policies singleton.
     */
    get policies(): PoliciesRequestBuilder;
  }
}
extendGraphServiceClient(PoliciesServiceClientNavigationMetadata);
export * from "./policiesServiceClient";

