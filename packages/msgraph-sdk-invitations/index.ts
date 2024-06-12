import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { InvitationsRequestBuilder } from "./invitations/index.js";
import { InvitationsServiceClientNavigationMetadata } from "./invitationsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the invitations singleton.
     */
    get invitations(): InvitationsRequestBuilder;
  }
}
extendGraphServiceClient(InvitationsServiceClientNavigationMetadata);
export * from "./invitationsServiceClient.js";
