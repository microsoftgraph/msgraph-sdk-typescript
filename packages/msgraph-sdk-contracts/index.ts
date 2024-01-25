import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ContractsRequestBuilder } from "./contracts";
import { ContractsServiceClientNavigationMetadata } from "./contractsServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the contracts singleton.
     */
    get contracts(): ContractsRequestBuilder;
  }
}
extendGraphServiceClient(ContractsServiceClientNavigationMetadata);
export * from "./contractsServiceClient";
