import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DeviceManagementRequestBuilder } from "./deviceManagement/index.js";
import { DeviceManagementServiceClientNavigationMetadata } from "./deviceManagementServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the deviceManagement singleton.
     */
    get deviceManagement(): DeviceManagementRequestBuilder;
  }
}
extendGraphServiceClient(DeviceManagementServiceClientNavigationMetadata);
export * from "./deviceManagementServiceClient.js";
