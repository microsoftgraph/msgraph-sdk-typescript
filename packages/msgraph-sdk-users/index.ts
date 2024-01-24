import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { UsersRequestBuilder } from "./users";
import { UsersServiceClientNavigationMetadata } from "./usersServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the collection of user entities.
     */
    get users(): UsersRequestBuilder;
  }
}
extendGraphServiceClient(UsersServiceClientNavigationMetadata);
export * from "./usersServiceClient";
