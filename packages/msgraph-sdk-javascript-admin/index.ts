import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AdminServiceClient,
  AdminServiceClientNavigationMetadata,
} from "./adminServiceClient";
import { AdminRequestBuilder } from "admin";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends AdminServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the admin singleton.
     */
    get admin(): AdminRequestBuilder;
  }
}
extendGraphServiceClient(AdminServiceClientNavigationMetadata);
export * from "./adminServiceClient";

