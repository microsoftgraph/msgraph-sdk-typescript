import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { ApplicationTemplatesRequestBuilder } from "./applicationTemplates";
import { ApplicationTemplatesServiceClientNavigationMetadata } from "./applicationTemplatesServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the applicationTemplates singleton.
     */
    get applicationTemplates(): ApplicationTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(ApplicationTemplatesServiceClientNavigationMetadata);
export * from "./applicationTemplatesServiceClient";
