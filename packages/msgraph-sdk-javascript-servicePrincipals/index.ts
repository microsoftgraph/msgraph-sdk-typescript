import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import type { ServicePrincipalsRequestBuilder } from "./servicePrincipals";
import { ServicePrincipalsServiceClientNavigationMetadata } from "./servicePrincipalsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the servicePrincipals singleton.
     */
    get servicePrincipals(): ServicePrincipalsRequestBuilder;
  }
}
extendGraphServiceClient(ServicePrincipalsServiceClientNavigationMetadata);
export * from "./servicePrincipalsServiceClient";
