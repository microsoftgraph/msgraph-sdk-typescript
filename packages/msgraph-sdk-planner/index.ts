import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { PlannerRequestBuilder } from "./planner";
import { PlannerServiceClientNavigationMetadata } from "./plannerServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the planner singleton.
     */
    get planner(): PlannerRequestBuilder;
  }
}
extendGraphServiceClient(PlannerServiceClientNavigationMetadata);
export * from "./plannerServiceClient.js";
