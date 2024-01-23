import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { DataPolicyOperationsRequestBuilder } from "./dataPolicyOperations";
import { DataPolicyOperationsServiceClientNavigationMetadata } from "./dataPolicyOperationsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the dataPolicyOperations singleton.
     */
    get dataPolicyOperations(): DataPolicyOperationsRequestBuilder;
  }
}
extendGraphServiceClient(DataPolicyOperationsServiceClientNavigationMetadata);
export * from "./dataPolicyOperationsServiceClient";
