import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DataPolicyOperationsRequestBuilder } from "./dataPolicyOperations/index.js";
import { DataPolicyOperationsServiceClientNavigationMetadata } from "./dataPolicyOperationsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the dataPolicyOperations singleton.
     */
    get dataPolicyOperations(): DataPolicyOperationsRequestBuilder;
  }
}
extendGraphServiceClient(DataPolicyOperationsServiceClientNavigationMetadata);
export * from "./dataPolicyOperationsServiceClient.js";
