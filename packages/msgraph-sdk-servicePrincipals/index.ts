import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { ServicePrincipalsRequestBuilder } from "./servicePrincipals";
import { ServicePrincipalsServiceClientNavigationMetadata } from "./servicePrincipalsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the servicePrincipals singleton.
     */
    get servicePrincipals(): ServicePrincipalsRequestBuilder;
  }
}
extendGraphServiceClient(ServicePrincipalsServiceClientNavigationMetadata);
export * from "./servicePrincipalsServiceClient.js";
