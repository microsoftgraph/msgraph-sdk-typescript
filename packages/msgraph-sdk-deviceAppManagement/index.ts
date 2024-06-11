import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DeviceAppManagementRequestBuilder } from "./deviceAppManagement";
import { DeviceAppManagementServiceClientNavigationMetadata } from "./deviceAppManagementServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the deviceAppManagement singleton.
     */
    get deviceAppManagement(): DeviceAppManagementRequestBuilder;
  }
}
extendGraphServiceClient(DeviceAppManagementServiceClientNavigationMetadata);
export * from "./deviceAppManagementServiceClient.js";
