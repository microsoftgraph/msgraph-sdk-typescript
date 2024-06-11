import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DirectoryRequestBuilder } from "./directory";
import { DirectoryServiceClientNavigationMetadata } from "./directoryServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directory singleton.
     */
    get directory(): DirectoryRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryServiceClientNavigationMetadata);
export * from "./directoryServiceClient.js";
