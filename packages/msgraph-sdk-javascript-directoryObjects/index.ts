import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DirectoryObjectsServiceClient,
  DirectoryObjectsServiceClientNavigationMetadata,
} from "./directoryObjectsServiceClient";
import { DirectoryObjectsRequestBuilder } from "directoryObjects";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DirectoryObjectsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryObjects singleton.
     */
    get directoryObjects(): DirectoryObjectsRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryObjectsServiceClientNavigationMetadata);
export * from "./directoryObjectsServiceClient";

