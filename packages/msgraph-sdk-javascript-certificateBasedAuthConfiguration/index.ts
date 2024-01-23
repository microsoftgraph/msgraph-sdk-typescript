import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { CertificateBasedAuthConfigurationRequestBuilder } from "certificateBasedAuthConfiguration";

import { CertificateBasedAuthConfigurationServiceClientNavigationMetadata } from "./certificateBasedAuthConfigurationServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the certificateBasedAuthConfiguration singleton.
     */
    get certificateBasedAuthConfiguration(): CertificateBasedAuthConfigurationRequestBuilder;
  }
}
extendGraphServiceClient(
  CertificateBasedAuthConfigurationServiceClientNavigationMetadata,
);
export * from "./certificateBasedAuthConfigurationServiceClient";
