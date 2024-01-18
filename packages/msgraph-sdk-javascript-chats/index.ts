import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ChatsServiceClient,
  ChatsServiceClientNavigationMetadata,
} from "./chatsServiceClient";
import { ChatsRequestBuilder } from "chats";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ChatsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the chats singleton.
     */
    get chats(): ChatsRequestBuilder;
  }
}
extendGraphServiceClient(ChatsServiceClientNavigationMetadata);
export * from "./chatsServiceClient";

