import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { ComplianceRequestBuilder } from "./compliance";
import { ComplianceServiceClientNavigationMetadata } from "./complianceServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the compliance singleton.
     */
    get compliance(): ComplianceRequestBuilder;
  }
}
extendGraphServiceClient(ComplianceServiceClientNavigationMetadata);
export * from "./complianceServiceClient";
