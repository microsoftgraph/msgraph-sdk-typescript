import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AppCatalogsServiceClient,
  AppCatalogsServiceClientNavigationMetadata,
} from "./appCatalogsServiceClient";
import { AppCatalogsRequestBuilder } from "appCatalogs";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends AppCatalogsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the appCatalogs singleton.
     */
    get appCatalogs(): AppCatalogsRequestBuilder;
  }
}
extendGraphServiceClient(AppCatalogsServiceClientNavigationMetadata);
export * from "./appCatalogsServiceClient";
