import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import { UsersRequestBuilder } from "users";
import { UsersServiceClientNavigationMetadata } from "./usersServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends AppCatalogsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the collection of user entities.
     */
    get users(): UsersRequestBuilder;
  }
}
extendGraphServiceClient(UsersServiceClientNavigationMetadata);
export * from "./usersServiceClient";

