import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type SubscriptionsServiceClient,
  SubscriptionsServiceClientNavigationMetadata,
} from "./subscriptionsServiceClient";
import { SubscriptionsRequestBuilder } from "subscriptions";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends SubscriptionsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the subscriptions singleton.
     */
    get subscriptions(): SubscriptionsRequestBuilder;
  }
}
extendGraphServiceClient(SubscriptionsServiceClientNavigationMetadata);
export * from "./subscriptionsServiceClient";

