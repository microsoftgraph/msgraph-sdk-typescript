import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type InvitationsServiceClient,
  InvitationsServiceClientNavigationMetadata,
} from "./invitationsServiceClient";
import { InvitationsRequestBuilder } from "invitations";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends InvitationsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the invitations singleton.
     */
    get invitations(): InvitationsRequestBuilder;
  }
}
extendGraphServiceClient(InvitationsServiceClientNavigationMetadata);
export * from "./invitationsServiceClient";

