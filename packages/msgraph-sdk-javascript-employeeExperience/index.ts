import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type EmployeeExperienceServiceClient,
  EmployeeExperienceServiceClientNavigationMetadata,
} from "./employeeExperienceServiceClient";
import { EmployeeExperienceRequestBuilder } from "employeeExperience";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends EmployeeExperienceServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the employeeExperience singleton.
     */
    get employeeExperience(): EmployeeExperienceRequestBuilder;
  }
}
extendGraphServiceClient(EmployeeExperienceServiceClientNavigationMetadata);
export * from "./employeeExperienceServiceClient";

