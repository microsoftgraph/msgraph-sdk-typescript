import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DevicesServiceClient,
  DevicesServiceClientNavigationMetadata,
} from "./devicesServiceClient";
import { DevicesRequestBuilder } from "devices";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DevicesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the devices singleton.
     */
    get devices(): DevicesRequestBuilder;
  }
}
extendGraphServiceClient(DevicesServiceClientNavigationMetadata);
export * from "./devicesServiceClient";

