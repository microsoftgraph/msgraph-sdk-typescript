import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DrivesRequestBuilder } from "./drives";
import { DrivesServiceClientNavigationMetadata } from "./drivesServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the drives singleton.
     */
    get drives(): DrivesRequestBuilder;
  }
}
extendGraphServiceClient(DrivesServiceClientNavigationMetadata);
export * from "./drivesServiceClient";
