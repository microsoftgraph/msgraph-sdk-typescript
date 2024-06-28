import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { DomainDnsRecordsRequestBuilder } from "./domainDnsRecords/index.js";
import { DomainDnsRecordsServiceClientNavigationMetadata } from "./domainDnsRecordsServiceClient.js";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the domainDnsRecords singleton.
     */
    get domainDnsRecords(): DomainDnsRecordsRequestBuilder;
  }
}
extendGraphServiceClient(DomainDnsRecordsServiceClientNavigationMetadata);
export * from "./domainDnsRecordsServiceClient.js";
