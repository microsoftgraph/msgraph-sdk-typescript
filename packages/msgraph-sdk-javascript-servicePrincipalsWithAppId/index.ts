import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type ServicePrincipalsWithAppIdServiceClient,
  ServicePrincipalsWithAppIdServiceClientNavigationMetadata,
} from "./servicePrincipalsWithAppIdServiceClient";
import { ServicePrincipalsWithAppIdRequestBuilder } from "servicePrincipalsWithAppId";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends ServicePrincipalsWithAppIdServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the servicePrincipalsWithAppId singleton.
     */
    get servicePrincipalsWithAppId(): ServicePrincipalsWithAppIdRequestBuilder;
  }
}
extendGraphServiceClient(ServicePrincipalsWithAppIdServiceClientNavigationMetadata);
export * from "./servicePrincipalsWithAppIdServiceClient";

