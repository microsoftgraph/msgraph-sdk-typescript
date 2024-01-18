import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type SolutionsServiceClient,
  SolutionsServiceClientNavigationMetadata,
} from "./solutionsServiceClient";
import { SolutionsRequestBuilder } from "solutions";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends SolutionsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the solutions singleton.
     */
    get solutions(): SolutionsRequestBuilder;
  }
}
extendGraphServiceClient(SolutionsServiceClientNavigationMetadata);
export * from "./solutionsServiceClient";

