import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { InformationProtectionRequestBuilder } from "./informationProtection";
import { InformationProtectionServiceClientNavigationMetadata } from "./informationProtectionServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the informationProtection singleton.
     */
    get informationProtection(): InformationProtectionRequestBuilder;
  }
}
extendGraphServiceClient(InformationProtectionServiceClientNavigationMetadata);
export * from "./informationProtectionServiceClient";
