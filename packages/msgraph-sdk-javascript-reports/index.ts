import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { ReportsRequestBuilder } from "./reports";
import { ReportsServiceClientNavigationMetadata } from "./reportsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the reports singleton.
     */
    get reports(): ReportsRequestBuilder;
  }
}
extendGraphServiceClient(ReportsServiceClientNavigationMetadata);
export * from "./reportsServiceClient";
