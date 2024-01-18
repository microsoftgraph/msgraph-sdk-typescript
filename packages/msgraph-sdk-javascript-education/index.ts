import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type EducationServiceClient,
  EducationServiceClientNavigationMetadata,
} from "./educationServiceClient";
import { EducationRequestBuilder } from "education";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends EducationServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the education singleton.
     */
    get education(): EducationRequestBuilder;
  }
}
extendGraphServiceClient(EducationServiceClientNavigationMetadata);
export * from "./educationServiceClient";

