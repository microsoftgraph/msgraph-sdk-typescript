import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DeviceManagementServiceClient,
  DeviceManagementServiceClientNavigationMetadata,
} from "./deviceManagementServiceClient";
import { DeviceManagementRequestBuilder } from "deviceManagement";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DeviceManagementServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the deviceManagement singleton.
     */
    get deviceManagement(): DeviceManagementRequestBuilder;
  }
}
extendGraphServiceClient(DeviceManagementServiceClientNavigationMetadata);
export * from "./deviceManagementServiceClient";

