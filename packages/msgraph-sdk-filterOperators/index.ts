import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { FilterOperatorsRequestBuilder } from "./filterOperators";
import { FilterOperatorsServiceClientNavigationMetadata } from "./filterOperatorsServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the filterOperators singleton.
     */
    get filterOperators(): FilterOperatorsRequestBuilder;
  }
}
extendGraphServiceClient(FilterOperatorsServiceClientNavigationMetadata);
export * from "./filterOperatorsServiceClient";
