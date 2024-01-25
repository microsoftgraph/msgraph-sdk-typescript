import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { PrivacyRequestBuilder } from "./privacy";
import { PrivacyServiceClientNavigationMetadata } from "./privacyServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the privacy singleton.
     */
    get privacy(): PrivacyRequestBuilder;
  }
}
extendGraphServiceClient(PrivacyServiceClientNavigationMetadata);
export * from "./privacyServiceClient";
