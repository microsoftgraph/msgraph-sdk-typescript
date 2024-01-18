import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type FunctionsServiceClient,
  FunctionsServiceClientNavigationMetadata,
} from "./functionsServiceClient";
import { FunctionsRequestBuilder } from "functions";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends FunctionsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the functions singleton.
     */
    get functions(): FunctionsRequestBuilder;
  }
}
extendGraphServiceClient(FunctionsServiceClientNavigationMetadata);
export * from "./functionsServiceClient";

