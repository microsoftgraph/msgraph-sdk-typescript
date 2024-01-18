import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type SchemaExtensionsServiceClient,
  SchemaExtensionsServiceClientNavigationMetadata,
} from "./schemaExtensionsServiceClient";
import { SchemaExtensionsRequestBuilder } from "schemaExtensions";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends SchemaExtensionsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the schemaExtensions singleton.
     */
    get schemaExtensions(): SchemaExtensionsRequestBuilder;
  }
}
extendGraphServiceClient(SchemaExtensionsServiceClientNavigationMetadata);
export * from "./schemaExtensionsServiceClient";

