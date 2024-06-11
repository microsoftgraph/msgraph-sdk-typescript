import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { IdentityGovernanceRequestBuilder } from "./identityGovernance";
import { IdentityGovernanceServiceClientNavigationMetadata } from "./identityGovernanceServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the identityGovernance singleton.
     */
    get identityGovernance(): IdentityGovernanceRequestBuilder;
  }
}
extendGraphServiceClient(IdentityGovernanceServiceClientNavigationMetadata);
export * from "./identityGovernanceServiceClient.js";
