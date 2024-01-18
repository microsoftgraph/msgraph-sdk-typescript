import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type CertificateBasedAuthConfigurationServiceClient,
  CertificateBasedAuthConfigurationServiceClientNavigationMetadata,
} from "./certificateBasedAuthConfigurationServiceClient";
import { CertificateBasedAuthConfigurationRequestBuilder } from "certificateBasedAuthConfiguration";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends CertificateBasedAuthConfigurationServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the certificateBasedAuthConfiguration singleton.
     */
    get certificateBasedAuthConfiguration(): CertificateBasedAuthConfigurationRequestBuilder;
  }
}
extendGraphServiceClient(CertificateBasedAuthConfigurationServiceClientNavigationMetadata);
export * from "./certificateBasedAuthConfigurationServiceClient";

