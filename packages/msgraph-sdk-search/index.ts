import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SearchRequestBuilder } from "./search";
import { SearchServiceClientNavigationMetadata } from "./searchServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the search singleton.
     */
    get search(): SearchRequestBuilder;
  }
}
extendGraphServiceClient(SearchServiceClientNavigationMetadata);
export * from "./searchServiceClient.js";
