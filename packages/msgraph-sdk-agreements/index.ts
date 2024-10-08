import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { AgreementsRequestBuilder } from "./agreements/index.js";
import { AgreementsServiceClientNavigationMetadata } from "./agreementsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the agreements singleton.
     */
    get agreements(): AgreementsRequestBuilder;
  }
}
extendGraphServiceClient(AgreementsServiceClientNavigationMetadata);
export * from "./agreementsServiceClient.js";
