import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { DeviceManagementRequestBuilder } from "./deviceManagement";
import { DeviceManagementServiceClientNavigationMetadata } from "./deviceManagementServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the deviceManagement singleton.
     */
    get deviceManagement(): DeviceManagementRequestBuilder;
  }
}
extendGraphServiceClient(DeviceManagementServiceClientNavigationMetadata);
export * from "./deviceManagementServiceClient";
