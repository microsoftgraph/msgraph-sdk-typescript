import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { EmployeeExperienceRequestBuilder } from "./employeeExperience";
import { EmployeeExperienceServiceClientNavigationMetadata } from "./employeeExperienceServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the employeeExperience singleton.
     */
    get employeeExperience(): EmployeeExperienceRequestBuilder;
  }
}
extendGraphServiceClient(EmployeeExperienceServiceClientNavigationMetadata);
export * from "./employeeExperienceServiceClient";
