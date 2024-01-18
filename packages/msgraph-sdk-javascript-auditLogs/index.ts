import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AuditLogsServiceClient,
  AuditLogsServiceClientNavigationMetadata,
} from "./auditLogsServiceClient";
import { AuditLogsRequestBuilder } from "auditLogs";

declare module "@microsoft/msgraph-sdk-javascript" {
  // interface GraphServiceClient extends AuditLogsServiceClient {}
  interface GraphServiceClient {
    /**
     * Provides operations to manage the auditLogs singleton.
     */
    get auditLogs(): AuditLogsRequestBuilder;
  }
}
extendGraphServiceClient(AuditLogsServiceClientNavigationMetadata);
export * from "./auditLogsServiceClient";

