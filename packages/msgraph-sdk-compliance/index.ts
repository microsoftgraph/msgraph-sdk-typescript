import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ComplianceRequestBuilder } from "./compliance/index.js";
import { ComplianceServiceClientNavigationMetadata } from "./complianceServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the compliance singleton.
     */
    get compliance(): ComplianceRequestBuilder;
  }
}
extendGraphServiceClient(ComplianceServiceClientNavigationMetadata);
export * from "./complianceServiceClient.js";
