import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type SecurityServiceClient,
  SecurityServiceClientNavigationMetadata,
} from "./securityServiceClient";
import { SecurityRequestBuilder } from "security";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends SecurityServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the security singleton.
     */
    get security(): SecurityRequestBuilder;
  }
}
extendGraphServiceClient(SecurityServiceClientNavigationMetadata);
export * from "./securityServiceClient";

