import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { PrintRequestBuilder } from "./print/index.js";
import { PrintServiceClientNavigationMetadata } from "./printServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the print singleton.
     */
    get print(): PrintRequestBuilder;
  }
}
extendGraphServiceClient(PrintServiceClientNavigationMetadata);
export * from "./printServiceClient.js";
