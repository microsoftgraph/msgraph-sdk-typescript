import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { EducationRequestBuilder } from "./education/index.js";
import { EducationServiceClientNavigationMetadata } from "./educationServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the education singleton.
     */
    get education(): EducationRequestBuilder;
  }
}
extendGraphServiceClient(EducationServiceClientNavigationMetadata);
export * from "./educationServiceClient.js";
