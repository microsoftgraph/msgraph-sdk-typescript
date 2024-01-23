import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { ConnectionsRequestBuilder } from "./connections";
import { ConnectionsServiceClientNavigationMetadata } from "./connectionsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the connections singleton.
     */
    get connections(): ConnectionsRequestBuilder;
  }
}
extendGraphServiceClient(ConnectionsServiceClientNavigationMetadata);
export * from "./connectionsServiceClient";
