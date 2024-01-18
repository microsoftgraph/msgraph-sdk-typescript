import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type IdentityServiceClient,
  IdentityServiceClientNavigationMetadata,
} from "./identityServiceClient";
import { IdentityRequestBuilder } from "identity";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends IdentityServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identity singleton.
     */
    get identity(): IdentityRequestBuilder;
  }
}
extendGraphServiceClient(IdentityServiceClientNavigationMetadata);
export * from "./identityServiceClient";

