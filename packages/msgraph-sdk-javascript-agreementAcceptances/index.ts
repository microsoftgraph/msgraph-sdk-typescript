import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { AgreementAcceptancesRequestBuilder } from "agreementAcceptances";

import { AgreementAcceptancesServiceClientNavigationMetadata } from "./agreementAcceptancesServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the agreementAcceptances singleton.
     */
    get agreementAcceptances(): AgreementAcceptancesRequestBuilder;
  }
}
extendGraphServiceClient(AgreementAcceptancesServiceClientNavigationMetadata);
export * from "./agreementAcceptancesServiceClient";
