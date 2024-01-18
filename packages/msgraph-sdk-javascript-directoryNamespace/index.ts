import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DirectoryNamespaceServiceClient,
  DirectoryNamespaceServiceClientNavigationMetadata,
} from "./directoryNamespaceServiceClient";
import { DirectoryNamespaceRequestBuilder } from "directoryNamespace";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DirectoryNamespaceServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the directoryNamespace singleton.
     */
    get directoryNamespace(): DirectoryNamespaceRequestBuilder;
  }
}
extendGraphServiceClient(DirectoryNamespaceServiceClientNavigationMetadata);
export * from "./directoryNamespaceServiceClient";

