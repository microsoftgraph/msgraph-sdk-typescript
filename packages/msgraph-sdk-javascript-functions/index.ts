import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { FunctionsRequestBuilder } from "functions";

import { FunctionsServiceClientNavigationMetadata } from "./functionsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the functions singleton.
     */
    get functions(): FunctionsRequestBuilder;
  }
}
extendGraphServiceClient(FunctionsServiceClientNavigationMetadata);
export * from "./functionsServiceClient";
