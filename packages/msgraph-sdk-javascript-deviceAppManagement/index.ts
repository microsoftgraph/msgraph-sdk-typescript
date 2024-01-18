import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DeviceAppManagementServiceClient,
  DeviceAppManagementServiceClientNavigationMetadata,
} from "./deviceAppManagementServiceClient";
import { DeviceAppManagementRequestBuilder } from "deviceAppManagement";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DeviceAppManagementServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the deviceAppManagement singleton.
     */
    get deviceAppManagement(): DeviceAppManagementRequestBuilder;
  }
}
extendGraphServiceClient(DeviceAppManagementServiceClientNavigationMetadata);
export * from "./deviceAppManagementServiceClient";

