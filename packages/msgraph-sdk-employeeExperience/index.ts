import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { EmployeeExperienceRequestBuilder } from "./employeeExperience/index.js";
import { EmployeeExperienceServiceClientNavigationMetadata } from "./employeeExperienceServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the employeeExperience singleton.
     */
    get employeeExperience(): EmployeeExperienceRequestBuilder;
  }
}
extendGraphServiceClient(EmployeeExperienceServiceClientNavigationMetadata);
export * from "./employeeExperienceServiceClient.js";
