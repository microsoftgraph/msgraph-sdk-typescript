import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ServicePrincipalsServiceClient,
  ServicePrincipalsServiceClientNavigationMetadata,
} from "./servicePrincipalsServiceClient";
import { ServicePrincipalsRequestBuilder } from "servicePrincipals";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ServicePrincipalsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the servicePrincipals singleton.
     */
    get servicePrincipals(): ServicePrincipalsRequestBuilder;
  }
}
extendGraphServiceClient(ServicePrincipalsServiceClientNavigationMetadata);
export * from "./servicePrincipalsServiceClient";

