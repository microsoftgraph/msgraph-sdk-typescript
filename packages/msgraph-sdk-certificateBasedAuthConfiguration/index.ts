import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { CertificateBasedAuthConfigurationRequestBuilder } from "./certificateBasedAuthConfiguration/index.js";
import { CertificateBasedAuthConfigurationServiceClientNavigationMetadata } from "./certificateBasedAuthConfigurationServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
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
export * from "./certificateBasedAuthConfigurationServiceClient.js";
