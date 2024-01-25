import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DirectoryObjectsRequestBuilder } from "./directoryObjects";
import { DirectoryObjectsServiceClientNavigationMetadata } from "./directoryObjectsServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryObjects singleton.
     */
    get directoryObjects(): DirectoryObjectsRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryObjectsServiceClientNavigationMetadata);
export * from "./directoryObjectsServiceClient";
