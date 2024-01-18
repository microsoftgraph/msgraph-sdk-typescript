import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type DomainDnsRecordsServiceClient,
  DomainDnsRecordsServiceClientNavigationMetadata,
} from "./domainDnsRecordsServiceClient";
import { DomainDnsRecordsRequestBuilder } from "domainDnsRecords";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends DomainDnsRecordsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the domainDnsRecords singleton.
     */
    get domainDnsRecords(): DomainDnsRecordsRequestBuilder;
  }
}
extendGraphServiceClient(DomainDnsRecordsServiceClientNavigationMetadata);
export * from "./domainDnsRecordsServiceClient";

