import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DirectoryObjectsRequestBuilder } from "./directoryObjects/index.js";
import { DirectoryObjectsServiceClientNavigationMetadata } from "./directoryObjectsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryObjects singleton.
     */
    get directoryObjects(): DirectoryObjectsRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryObjectsServiceClientNavigationMetadata);
export * from "./directoryObjectsServiceClient.js";
