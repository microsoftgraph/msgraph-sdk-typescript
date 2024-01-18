import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ReportsServiceClient,
  ReportsServiceClientNavigationMetadata,
} from "./reportsServiceClient";
import { ReportsRequestBuilder } from "reports";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ReportsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the reports singleton.
     */
    get reports(): ReportsRequestBuilder;
  }
}
extendGraphServiceClient(ReportsServiceClientNavigationMetadata);
export * from "./reportsServiceClient";

