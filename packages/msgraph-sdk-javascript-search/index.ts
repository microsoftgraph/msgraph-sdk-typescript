import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { SearchRequestBuilder } from "search";

import { SearchServiceClientNavigationMetadata } from "./searchServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the search singleton.
     */
    get search(): SearchRequestBuilder;
  }
}
extendGraphServiceClient(SearchServiceClientNavigationMetadata);
export * from "./searchServiceClient";
