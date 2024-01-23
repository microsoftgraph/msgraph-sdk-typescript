import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { CommunicationsRequestBuilder } from "./communications";
import { CommunicationsServiceClientNavigationMetadata } from "./communicationsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the communications singleton.
     */
    get communications(): CommunicationsRequestBuilder;
  }
}
extendGraphServiceClient(CommunicationsServiceClientNavigationMetadata);
export * from "./communicationsServiceClient";
