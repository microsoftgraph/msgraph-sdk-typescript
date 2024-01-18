import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type Oauth2PermissionGrantsServiceClient,
  Oauth2PermissionGrantsServiceClientNavigationMetadata,
} from "./oauth2PermissionGrantsServiceClient";
import { Oauth2PermissionGrantsRequestBuilder } from "oauth2PermissionGrants";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends Oauth2PermissionGrantsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the oauth2PermissionGrants singleton.
     */
    get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder;
  }
}
extendGraphServiceClient(Oauth2PermissionGrantsServiceClientNavigationMetadata);
export * from "./oauth2PermissionGrantsServiceClient";

