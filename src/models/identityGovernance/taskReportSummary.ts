import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TaskReportSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number of failed tasks in a report.
     */
    failedTasks?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The total number of successful tasks in a report.
     */
    successfulTasks?: number | undefined;
    /**
     * The total number of tasks in a report.
     */
    totalTasks?: number | undefined;
    /**
     * The number of unprocessed tasks in a report.
     */
    unprocessedTasks?: number | undefined;
}
