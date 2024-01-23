import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { AppCatalogsRequestBuilder } from "./appCatalogs";
import { AppCatalogsServiceClientNavigationMetadata } from "./appCatalogsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the appCatalogs singleton.
     */
    get appCatalogs(): AppCatalogsRequestBuilder;
  }
}
extendGraphServiceClient(AppCatalogsServiceClientNavigationMetadata);
export * from "./appCatalogsServiceClient";
