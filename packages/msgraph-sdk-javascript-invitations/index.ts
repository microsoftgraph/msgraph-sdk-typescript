import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { InvitationsRequestBuilder } from "invitations";

import { InvitationsServiceClientNavigationMetadata } from "./invitationsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the invitations singleton.
     */
    get invitations(): InvitationsRequestBuilder;
  }
}
extendGraphServiceClient(InvitationsServiceClientNavigationMetadata);
export * from "./invitationsServiceClient";
