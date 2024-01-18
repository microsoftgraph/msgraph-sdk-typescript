import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type IdentityGovernanceServiceClient,
  IdentityGovernanceServiceClientNavigationMetadata,
} from "./identityGovernanceServiceClient";
import { IdentityGovernanceRequestBuilder } from "identityGovernance";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends IdentityGovernanceServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identityGovernance singleton.
     */
    get identityGovernance(): IdentityGovernanceRequestBuilder;
  }
}
extendGraphServiceClient(IdentityGovernanceServiceClientNavigationMetadata);
export * from "./identityGovernanceServiceClient";

