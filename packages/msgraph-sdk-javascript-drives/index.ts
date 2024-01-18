import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DrivesServiceClient,
  DrivesServiceClientNavigationMetadata,
} from "./drivesServiceClient";
import { DrivesRequestBuilder } from "drives";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DrivesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the drives singleton.
     */
    get drives(): DrivesRequestBuilder;
  }
}
extendGraphServiceClient(DrivesServiceClientNavigationMetadata);
export * from "./drivesServiceClient";

