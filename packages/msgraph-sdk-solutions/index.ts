import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SolutionsRequestBuilder } from "./solutions";
import { SolutionsServiceClientNavigationMetadata } from "./solutionsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the solutions singleton.
     */
    get solutions(): SolutionsRequestBuilder;
  }
}
extendGraphServiceClient(SolutionsServiceClientNavigationMetadata);
export * from "./solutionsServiceClient.js";
