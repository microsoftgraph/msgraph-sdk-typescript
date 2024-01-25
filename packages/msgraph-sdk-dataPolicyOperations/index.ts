import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DataPolicyOperationsRequestBuilder } from "./dataPolicyOperations";
import { DataPolicyOperationsServiceClientNavigationMetadata } from "./dataPolicyOperationsServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the dataPolicyOperations singleton.
     */
    get dataPolicyOperations(): DataPolicyOperationsRequestBuilder;
  }
}
extendGraphServiceClient(DataPolicyOperationsServiceClientNavigationMetadata);
export * from "./dataPolicyOperationsServiceClient";
