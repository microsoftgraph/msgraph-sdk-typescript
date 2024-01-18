import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ContractsServiceClient,
  ContractsServiceClientNavigationMetadata,
} from "./contractsServiceClient";
import { ContractsRequestBuilder } from "contracts";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ContractsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the contracts singleton.
     */
    get contracts(): ContractsRequestBuilder;
  }
}
extendGraphServiceClient(ContractsServiceClientNavigationMetadata);
export * from "./contractsServiceClient";

