import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { EducationRequestBuilder } from "education";

import { EducationServiceClientNavigationMetadata } from "./educationServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the education singleton.
     */
    get education(): EducationRequestBuilder;
  }
}
extendGraphServiceClient(EducationServiceClientNavigationMetadata);
export * from "./educationServiceClient";
