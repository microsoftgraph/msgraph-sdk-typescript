import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type SubscribedSkusServiceClient,
  SubscribedSkusServiceClientNavigationMetadata,
} from "./subscribedSkusServiceClient";
import { SubscribedSkusRequestBuilder } from "subscribedSkus";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends SubscribedSkusServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the subscribedSkus singleton.
     */
    get subscribedSkus(): SubscribedSkusRequestBuilder;
  }
}
extendGraphServiceClient(SubscribedSkusServiceClientNavigationMetadata);
export * from "./subscribedSkusServiceClient";

