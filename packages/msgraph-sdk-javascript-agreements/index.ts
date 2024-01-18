import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AgreementsServiceClient,
  AgreementsServiceClientNavigationMetadata,
} from "./agreementsServiceClient";
import { AgreementsRequestBuilder } from "agreements";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends AgreementsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the agreements singleton.
     */
    get agreements(): AgreementsRequestBuilder;
  }
}
extendGraphServiceClient(AgreementsServiceClientNavigationMetadata);
export * from "./agreementsServiceClient";

