import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { InformationProtectionRequestBuilder } from "./informationProtection";
import { InformationProtectionServiceClientNavigationMetadata } from "./informationProtectionServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the informationProtection singleton.
     */
    get informationProtection(): InformationProtectionRequestBuilder;
  }
}
extendGraphServiceClient(InformationProtectionServiceClientNavigationMetadata);
export * from "./informationProtectionServiceClient";
