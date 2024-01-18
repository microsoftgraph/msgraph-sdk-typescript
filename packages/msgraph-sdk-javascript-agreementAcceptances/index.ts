import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AgreementAcceptancesServiceClient,
  AgreementAcceptancesServiceClientNavigationMetadata,
} from "./agreementAcceptancesServiceClient";
import { AgreementAcceptancesRequestBuilder } from "agreementAcceptances";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends AgreementAcceptancesServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the agreementAcceptances singleton.
     */
    get agreementAcceptances(): AgreementAcceptancesRequestBuilder;
  }
}
extendGraphServiceClient(AgreementAcceptancesServiceClientNavigationMetadata);
export * from "./agreementAcceptancesServiceClient";

