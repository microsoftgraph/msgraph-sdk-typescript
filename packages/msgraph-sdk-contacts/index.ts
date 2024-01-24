import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ContactsRequestBuilder } from "./contacts";
import { ContactsServiceClientNavigationMetadata } from "./contactsServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the contacts singleton.
     */
    get contacts(): ContactsRequestBuilder;
  }
}
extendGraphServiceClient(ContactsServiceClientNavigationMetadata);
export * from "./contactsServiceClient";
