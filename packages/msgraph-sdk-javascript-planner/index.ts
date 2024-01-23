import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { PlannerRequestBuilder } from "planner";

import { PlannerServiceClientNavigationMetadata } from "./plannerServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the planner singleton.
     */
    get planner(): PlannerRequestBuilder;
  }
}
extendGraphServiceClient(PlannerServiceClientNavigationMetadata);
export * from "./plannerServiceClient";
