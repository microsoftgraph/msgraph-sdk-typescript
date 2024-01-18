import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type PrivacyServiceClient,
  PrivacyServiceClientNavigationMetadata,
} from "./privacyServiceClient";
import { PrivacyRequestBuilder } from "privacy";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends PrivacyServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the privacy singleton.
     */
    get privacy(): PrivacyRequestBuilder;
  }
}
extendGraphServiceClient(PrivacyServiceClientNavigationMetadata);
export * from "./privacyServiceClient";

