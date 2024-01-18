import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type SharesServiceClient,
  SharesServiceClientNavigationMetadata,
} from "./sharesServiceClient";
import { SharesRequestBuilder } from "shares";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends SharesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the shares singleton.
     */
    get shares(): SharesRequestBuilder;
  }
}
extendGraphServiceClient(SharesServiceClientNavigationMetadata);
export * from "./sharesServiceClient";

