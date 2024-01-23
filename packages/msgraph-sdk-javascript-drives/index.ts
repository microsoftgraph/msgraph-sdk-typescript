import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { DrivesRequestBuilder } from "./drives";
import { DrivesServiceClientNavigationMetadata } from "./drivesServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the drives singleton.
     */
    get drives(): DrivesRequestBuilder;
  }
}
extendGraphServiceClient(DrivesServiceClientNavigationMetadata);
export * from "./drivesServiceClient";
