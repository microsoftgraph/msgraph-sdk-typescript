import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DrivesRequestBuilder } from "./drives/index.js";
import { DrivesServiceClientNavigationMetadata } from "./drivesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the drives singleton.
     */
    get drives(): DrivesRequestBuilder;
  }
}
extendGraphServiceClient(DrivesServiceClientNavigationMetadata);
export * from "./drivesServiceClient.js";
