import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type PlannerServiceClient,
  PlannerServiceClientNavigationMetadata,
} from "./plannerServiceClient";
import { PlannerRequestBuilder } from "planner";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends PlannerServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the planner singleton.
     */
    get planner(): PlannerRequestBuilder;
  }
}
extendGraphServiceClient(PlannerServiceClientNavigationMetadata);
export * from "./plannerServiceClient";

