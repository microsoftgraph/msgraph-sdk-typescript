import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type FilterOperatorsServiceClient,
  FilterOperatorsServiceClientNavigationMetadata,
} from "./filterOperatorsServiceClient";
import { FilterOperatorsRequestBuilder } from "filterOperators";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends FilterOperatorsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the filterOperators singleton.
     */
    get filterOperators(): FilterOperatorsRequestBuilder;
  }
}
extendGraphServiceClient(FilterOperatorsServiceClientNavigationMetadata);
export * from "./filterOperatorsServiceClient";

