import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type InformationProtectionServiceClient,
  InformationProtectionServiceClientNavigationMetadata,
} from "./informationProtectionServiceClient";
import { InformationProtectionRequestBuilder } from "informationProtection";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends InformationProtectionServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the informationProtection singleton.
     */
    get informationProtection(): InformationProtectionRequestBuilder;
  }
}
extendGraphServiceClient(InformationProtectionServiceClientNavigationMetadata);
export * from "./informationProtectionServiceClient";

