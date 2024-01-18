import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type PrintServiceClient,
  PrintServiceClientNavigationMetadata,
} from "./printServiceClient";
import { PrintRequestBuilder } from "print";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends PrintServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the print singleton.
     */
    get print(): PrintRequestBuilder;
  }
}
extendGraphServiceClient(PrintServiceClientNavigationMetadata);
export * from "./printServiceClient";

