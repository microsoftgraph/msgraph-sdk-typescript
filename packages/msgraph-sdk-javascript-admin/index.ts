import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { AdminRequestBuilder } from "./admin";
import { AdminServiceClientNavigationMetadata } from "./adminServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the admin singleton.
     */
    get admin(): AdminRequestBuilder;
  }
}
extendGraphServiceClient(AdminServiceClientNavigationMetadata);
export * from "./adminServiceClient";
