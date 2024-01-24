import { extendGraphServiceClient } from "@microsoft/msgraph-sdk";

import type { AuditLogsRequestBuilder } from "./auditLogs";
import { AuditLogsServiceClientNavigationMetadata } from "./auditLogsServiceClient";

declare module "@microsoft/msgraph-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the auditLogs singleton.
     */
    get auditLogs(): AuditLogsRequestBuilder;
  }
}
extendGraphServiceClient(AuditLogsServiceClientNavigationMetadata);
export * from "./auditLogsServiceClient";
