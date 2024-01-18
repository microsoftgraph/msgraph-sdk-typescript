import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ConnectionsServiceClient,
  ConnectionsServiceClientNavigationMetadata,
} from "./connectionsServiceClient";
import { ConnectionsRequestBuilder } from "connections";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ConnectionsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the connections singleton.
     */
    get connections(): ConnectionsRequestBuilder;
  }
}
extendGraphServiceClient(ConnectionsServiceClientNavigationMetadata);
export * from "./connectionsServiceClient";

