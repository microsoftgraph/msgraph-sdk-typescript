import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DirectoryServiceClient,
  DirectoryServiceClientNavigationMetadata,
} from "./directoryServiceClient";
import { DirectoryRequestBuilder } from "directory";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DirectoryServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directory singleton.
     */
    get directory(): DirectoryRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryServiceClientNavigationMetadata);
export * from "./directoryServiceClient";
