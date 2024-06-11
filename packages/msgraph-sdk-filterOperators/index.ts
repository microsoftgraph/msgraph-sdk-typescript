import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { FilterOperatorsRequestBuilder } from "./filterOperators/index.js";
import { FilterOperatorsServiceClientNavigationMetadata } from "./filterOperatorsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the filterOperators singleton.
     */
    get filterOperators(): FilterOperatorsRequestBuilder;
  }
}
extendGraphServiceClient(FilterOperatorsServiceClientNavigationMetadata);
export * from "./filterOperatorsServiceClient.js";
