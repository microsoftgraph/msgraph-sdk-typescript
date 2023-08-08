import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RunSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The number of failed workflow runs.
     */
    failedRuns?: number | undefined;
    /**
     * The number of failed tasks of a workflow.
     */
    failedTasks?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The number of successful workflow runs.
     */
    successfulRuns?: number | undefined;
    /**
     * The total number of runs for a workflow.
     */
    totalRuns?: number | undefined;
    /**
     * The total number of tasks processed by a workflow.
     */
    totalTasks?: number | undefined;
    /**
     * The total number of users processed by a workflow.
     */
    totalUsers?: number | undefined;
}
