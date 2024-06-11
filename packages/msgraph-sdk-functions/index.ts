import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { FunctionsRequestBuilder } from "./functions/index.js";
import { FunctionsServiceClientNavigationMetadata } from "./functionsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the functions singleton.
     */
    get functions(): FunctionsRequestBuilder;
  }
}
extendGraphServiceClient(FunctionsServiceClientNavigationMetadata);
export * from "./functionsServiceClient.js";
