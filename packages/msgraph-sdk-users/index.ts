import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { UsersRequestBuilder } from "./users";
import type { UserItemRequestBuilder } from "./users/item";
import { UsersServiceClientNavigationMetadata } from "./usersServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the collection of user entities.
     */
    get users(): UsersRequestBuilder;
    /**
     * Provides operations to manage the currently signed-in user.
     */
    get me(): UserItemRequestBuilder;
  }
}
extendGraphServiceClient(UsersServiceClientNavigationMetadata);
export * from "./usersServiceClient.js";
