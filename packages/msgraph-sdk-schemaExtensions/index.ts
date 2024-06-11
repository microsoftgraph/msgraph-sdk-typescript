import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { SchemaExtensionsRequestBuilder } from "./schemaExtensions";
import { SchemaExtensionsServiceClientNavigationMetadata } from "./schemaExtensionsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the schemaExtensions singleton.
     */
    get schemaExtensions(): SchemaExtensionsRequestBuilder;
  }
}
extendGraphServiceClient(SchemaExtensionsServiceClientNavigationMetadata);
export * from "./schemaExtensionsServiceClient.js";
