import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SharesRequestBuilder } from "./shares/index.js";
import { SharesServiceClientNavigationMetadata } from "./sharesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the shares singleton.
     */
    get shares(): SharesRequestBuilder;
  }
}
extendGraphServiceClient(SharesServiceClientNavigationMetadata);
export * from "./sharesServiceClient.js";
