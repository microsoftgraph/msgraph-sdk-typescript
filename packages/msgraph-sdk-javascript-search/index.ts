import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type SearchServiceClient,
  SearchServiceClientNavigationMetadata,
} from "./searchServiceClient";
import { SearchRequestBuilder } from "search";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends SearchServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the search singleton.
     */
    get search(): SearchRequestBuilder;
  }
}
extendGraphServiceClient(SearchServiceClientNavigationMetadata);
export * from "./searchServiceClient";

