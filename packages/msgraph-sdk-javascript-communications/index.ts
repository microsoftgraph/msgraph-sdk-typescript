import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type CommunicationsServiceClient,
  CommunicationsServiceClientNavigationMetadata,
} from "./communicationsServiceClient";
import { CommunicationsRequestBuilder } from "communications";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends CommunicationsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the communications singleton.
     */
    get communications(): CommunicationsRequestBuilder;
  }
}
extendGraphServiceClient(CommunicationsServiceClientNavigationMetadata);
export * from "./communicationsServiceClient";

