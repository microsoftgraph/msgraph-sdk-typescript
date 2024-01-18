import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ComplianceServiceClient,
  ComplianceServiceClientNavigationMetadata,
} from "./complianceServiceClient";
import { ComplianceRequestBuilder } from "compliance";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ComplianceServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the compliance singleton.
     */
    get compliance(): ComplianceRequestBuilder;
  }
}
extendGraphServiceClient(ComplianceServiceClientNavigationMetadata);
export * from "./complianceServiceClient";

