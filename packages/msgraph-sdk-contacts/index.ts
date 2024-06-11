import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ContactsRequestBuilder } from "./contacts";
import { ContactsServiceClientNavigationMetadata } from "./contactsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the contacts singleton.
     */
    get contacts(): ContactsRequestBuilder;
  }
}
extendGraphServiceClient(ContactsServiceClientNavigationMetadata);
export * from "./contactsServiceClient.js";
