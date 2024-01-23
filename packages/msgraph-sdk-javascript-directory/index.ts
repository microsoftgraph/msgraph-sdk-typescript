import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { DirectoryRequestBuilder } from "./directory";
import { DirectoryServiceClientNavigationMetadata } from "./directoryServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directory singleton.
     */
    get directory(): DirectoryRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryServiceClientNavigationMetadata);
export * from "./directoryServiceClient";
