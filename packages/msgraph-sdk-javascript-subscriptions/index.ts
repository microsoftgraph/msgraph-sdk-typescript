import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { SubscriptionsRequestBuilder } from "subscriptions";

import { SubscriptionsServiceClientNavigationMetadata } from "./subscriptionsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the subscriptions singleton.
     */
    get subscriptions(): SubscriptionsRequestBuilder;
  }
}
extendGraphServiceClient(SubscriptionsServiceClientNavigationMetadata);
export * from "./subscriptionsServiceClient";
