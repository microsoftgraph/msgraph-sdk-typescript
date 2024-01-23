import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { ChatsRequestBuilder } from "./chats";
import { ChatsServiceClientNavigationMetadata } from "./chatsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the chats singleton.
     */
    get chats(): ChatsRequestBuilder;
  }
}
extendGraphServiceClient(ChatsServiceClientNavigationMetadata);
export * from "./chatsServiceClient";
