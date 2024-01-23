import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { SchemaExtensionsRequestBuilder } from "schemaExtensions";

import { SchemaExtensionsServiceClientNavigationMetadata } from "./schemaExtensionsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the schemaExtensions singleton.
     */
    get schemaExtensions(): SchemaExtensionsRequestBuilder;
  }
}
extendGraphServiceClient(SchemaExtensionsServiceClientNavigationMetadata);
export * from "./schemaExtensionsServiceClient";
