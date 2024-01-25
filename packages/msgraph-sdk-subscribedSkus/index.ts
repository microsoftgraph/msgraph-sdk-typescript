import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SubscribedSkusRequestBuilder } from "./subscribedSkus";
import { SubscribedSkusServiceClientNavigationMetadata } from "./subscribedSkusServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the subscribedSkus singleton.
     */
    get subscribedSkus(): SubscribedSkusRequestBuilder;
  }
}
extendGraphServiceClient(SubscribedSkusServiceClientNavigationMetadata);
export * from "./subscribedSkusServiceClient";
