import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SubscriptionsRequestBuilder } from "./subscriptions/index.js";
import { SubscriptionsServiceClientNavigationMetadata } from "./subscriptionsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the subscriptions singleton.
     */
    get subscriptions(): SubscriptionsRequestBuilder;
  }
}
extendGraphServiceClient(SubscriptionsServiceClientNavigationMetadata);
export * from "./subscriptionsServiceClient.js";
