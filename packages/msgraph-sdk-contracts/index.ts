import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ContractsRequestBuilder } from "./contracts/index.js";
import { ContractsServiceClientNavigationMetadata } from "./contractsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the contracts singleton.
     */
    get contracts(): ContractsRequestBuilder;
  }
}
extendGraphServiceClient(ContractsServiceClientNavigationMetadata);
export * from "./contractsServiceClient.js";
