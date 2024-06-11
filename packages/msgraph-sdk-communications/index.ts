import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { CommunicationsRequestBuilder } from "./communications";
import { CommunicationsServiceClientNavigationMetadata } from "./communicationsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the communications singleton.
     */
    get communications(): CommunicationsRequestBuilder;
  }
}
extendGraphServiceClient(CommunicationsServiceClientNavigationMetadata);
export * from "./communicationsServiceClient.js";
