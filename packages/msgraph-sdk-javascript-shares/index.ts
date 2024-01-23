import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { SharesRequestBuilder } from "shares";

import { SharesServiceClientNavigationMetadata } from "./sharesServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the shares singleton.
     */
    get shares(): SharesRequestBuilder;
  }
}
extendGraphServiceClient(SharesServiceClientNavigationMetadata);
export * from "./sharesServiceClient";
