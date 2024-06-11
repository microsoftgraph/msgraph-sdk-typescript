import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SubscribedSkusRequestBuilder } from "./subscribedSkus/index.js";
import { SubscribedSkusServiceClientNavigationMetadata } from "./subscribedSkusServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the subscribedSkus singleton.
     */
    get subscribedSkus(): SubscribedSkusRequestBuilder;
  }
}
extendGraphServiceClient(SubscribedSkusServiceClientNavigationMetadata);
export * from "./subscribedSkusServiceClient.js";
