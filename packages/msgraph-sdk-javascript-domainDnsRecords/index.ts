import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import type { DomainDnsRecordsRequestBuilder } from "domainDnsRecords";

import { DomainDnsRecordsServiceClientNavigationMetadata } from "./domainDnsRecordsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the domainDnsRecords singleton.
     */
    get domainDnsRecords(): DomainDnsRecordsRequestBuilder;
  }
}
extendGraphServiceClient(DomainDnsRecordsServiceClientNavigationMetadata);
export * from "./domainDnsRecordsServiceClient";
