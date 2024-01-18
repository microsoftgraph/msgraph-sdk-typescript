import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ContactsServiceClient,
  ContactsServiceClientNavigationMetadata,
} from "./contactsServiceClient";
import { ContactsRequestBuilder } from "contacts";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ContactsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the contacts singleton.
     */
    get contacts(): ContactsRequestBuilder;
  }
}
extendGraphServiceClient(ContactsServiceClientNavigationMetadata);
export * from "./contactsServiceClient";

