import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ApplicationTemplatesServiceClient,
  ApplicationTemplatesServiceClientNavigationMetadata,
} from "./applicationTemplatesServiceClient";
import { ApplicationTemplatesRequestBuilder } from "applicationTemplates";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ApplicationTemplatesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the applicationTemplates singleton.
     */
    get applicationTemplates(): ApplicationTemplatesRequestBuilder;
  }
}
extendGraphServiceClient(ApplicationTemplatesServiceClientNavigationMetadata);
export * from "./applicationTemplatesServiceClient";

