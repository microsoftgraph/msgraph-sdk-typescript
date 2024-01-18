import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DataPolicyOperationsServiceClient,
  DataPolicyOperationsServiceClientNavigationMetadata,
} from "./dataPolicyOperationsServiceClient";
import { DataPolicyOperationsRequestBuilder } from "dataPolicyOperations";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DataPolicyOperationsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the dataPolicyOperations singleton.
     */
    get dataPolicyOperations(): DataPolicyOperationsRequestBuilder;
  }
}
extendGraphServiceClient(DataPolicyOperationsServiceClientNavigationMetadata);
export * from "./dataPolicyOperationsServiceClient";

