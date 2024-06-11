import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ReportsRequestBuilder } from "./reports/index.js";
import { ReportsServiceClientNavigationMetadata } from "./reportsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the reports singleton.
     */
    get reports(): ReportsRequestBuilder;
  }
}
extendGraphServiceClient(ReportsServiceClientNavigationMetadata);
export * from "./reportsServiceClient.js";
