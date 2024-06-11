import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { Oauth2PermissionGrantsRequestBuilder } from "./oauth2PermissionGrants";
import { Oauth2PermissionGrantsServiceClientNavigationMetadata } from "./oauth2PermissionGrantsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the oauth2PermissionGrants singleton.
     */
    get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder;
  }
}
extendGraphServiceClient(Oauth2PermissionGrantsServiceClientNavigationMetadata);
export * from "./oauth2PermissionGrantsServiceClient.js";
