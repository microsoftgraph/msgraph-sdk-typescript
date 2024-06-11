import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ConnectionsRequestBuilder } from "./connections/index.js";
import { ConnectionsServiceClientNavigationMetadata } from "./connectionsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the connections singleton.
     */
    get connections(): ConnectionsRequestBuilder;
  }
}
extendGraphServiceClient(ConnectionsServiceClientNavigationMetadata);
export * from "./connectionsServiceClient.js";
