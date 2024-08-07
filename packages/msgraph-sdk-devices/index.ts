import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DevicesRequestBuilder } from "./devices/index.js";
import { DevicesServiceClientNavigationMetadata } from "./devicesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the devices singleton.
     */
    get devices(): DevicesRequestBuilder;
  }
}
extendGraphServiceClient(DevicesServiceClientNavigationMetadata);
export * from "./devicesServiceClient.js";
