import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { ContractsRequestBuilder } from "contracts";

import { ContractsServiceClientNavigationMetadata } from "./contractsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the contracts singleton.
     */
    get contracts(): ContractsRequestBuilder;
  }
}
extendGraphServiceClient(ContractsServiceClientNavigationMetadata);
export * from "./contractsServiceClient";
