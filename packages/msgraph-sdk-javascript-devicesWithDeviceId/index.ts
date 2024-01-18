import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DevicesWithDeviceIdServiceClient,
  DevicesWithDeviceIdServiceClientNavigationMetadata,
} from "./devicesWithDeviceIdServiceClient";
import { DevicesWithDeviceIdRequestBuilder } from "devicesWithDeviceId";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DevicesWithDeviceIdServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the devicesWithDeviceId singleton.
     */
    get devicesWithDeviceId(): DevicesWithDeviceIdRequestBuilder;
  }
}
extendGraphServiceClient(DevicesWithDeviceIdServiceClientNavigationMetadata);
export * from "./devicesWithDeviceIdServiceClient";

