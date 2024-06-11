import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { AgreementAcceptancesRequestBuilder } from "./agreementAcceptances/index.js";
import { AgreementAcceptancesServiceClientNavigationMetadata } from "./agreementAcceptancesServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the agreementAcceptances singleton.
     */
    get agreementAcceptances(): AgreementAcceptancesRequestBuilder;
  }
}
extendGraphServiceClient(AgreementAcceptancesServiceClientNavigationMetadata);
export * from "./agreementAcceptancesServiceClient.js";
