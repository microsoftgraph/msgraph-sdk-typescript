import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ChatsRequestBuilder } from "./chats";
import { ChatsServiceClientNavigationMetadata } from "./chatsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the chats singleton.
     */
    get chats(): ChatsRequestBuilder;
  }
}
extendGraphServiceClient(ChatsServiceClientNavigationMetadata);
export * from "./chatsServiceClient.js";
