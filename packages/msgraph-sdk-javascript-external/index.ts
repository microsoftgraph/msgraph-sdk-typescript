import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ExternalServiceClient,
  ExternalServiceClientNavigationMetadata,
} from "./externalServiceClient";
import { ExternalRequestBuilder } from "external";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ExternalServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the external singleton.
     */
    get external(): ExternalRequestBuilder;
  }
}
extendGraphServiceClient(ExternalServiceClientNavigationMetadata);
export * from "./externalServiceClient";

