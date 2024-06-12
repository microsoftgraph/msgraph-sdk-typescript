import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ApplicationTemplatesRequestBuilder } from "./applicationTemplates/index.js";
import { ApplicationTemplatesServiceClientNavigationMetadata } from "./applicationTemplatesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the applicationTemplates singleton.
     */
    get applicationTemplates(): ApplicationTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(ApplicationTemplatesServiceClientNavigationMetadata);
export * from "./applicationTemplatesServiceClient.js";
