import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { DeviceAppManagementRequestBuilder } from "./deviceAppManagement";
import { DeviceAppManagementServiceClientNavigationMetadata } from "./deviceAppManagementServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the deviceAppManagement singleton.
     */
    get deviceAppManagement(): DeviceAppManagementRequestBuilder;
  }
}
extendGraphServiceClient(DeviceAppManagementServiceClientNavigationMetadata);
export * from "./deviceAppManagementServiceClient";
