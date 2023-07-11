import {StringKeyLongValuePair} from './stringKeyLongValuePair';
import {SynchronizationProgress} from './synchronizationProgress';
import {SynchronizationQuarantine} from './synchronizationQuarantine';
import {SynchronizationStatusCode} from './synchronizationStatusCode';
import {SynchronizationTaskExecution} from './synchronizationTaskExecution';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The code property
     */
    code?: SynchronizationStatusCode | undefined;
    /**
     * Number of consecutive times this job failed.
     */
    countSuccessiveCompleteFailures?: number | undefined;
    /**
     * true if the job's escrows (object-level errors) were pruned during initial synchronization. Escrows can be pruned if during the initial synchronization, you reach the threshold of errors that would normally put the job in quarantine. Instead of going into quarantine, the synchronization process clears the job's errors and continues until the initial synchronization is completed. When the initial synchronization is completed, the job will pause and wait for the customer to clean up the errors.
     */
    escrowsPruned?: boolean | undefined;
    /**
     * Details of the last execution of the job.
     */
    lastExecution?: SynchronizationTaskExecution | undefined;
    /**
     * Details of the last execution of this job, which didn't have any errors.
     */
    lastSuccessfulExecution?: SynchronizationTaskExecution | undefined;
    /**
     * Details of the last execution of the job, which exported objects into the target directory.
     */
    lastSuccessfulExecutionWithExports?: SynchronizationTaskExecution | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Details of the progress of a job toward completion.
     */
    progress?: SynchronizationProgress[] | undefined;
    /**
     * If job is in quarantine, quarantine details.
     */
    quarantine?: SynchronizationQuarantine | undefined;
    /**
     * The time when steady state (no more changes to the process) was first achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    steadyStateFirstAchievedTime?: Date | undefined;
    /**
     * The time when steady state (no more changes to the process) was last achieved. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    steadyStateLastAchievedTime?: Date | undefined;
    /**
     * Count of synchronized objects, listed by object type.
     */
    synchronizedEntryCountByType?: StringKeyLongValuePair[] | undefined;
    /**
     * In the event of an error, the URL with the troubleshooting steps for the issue.
     */
    troubleshootingUrl?: string | undefined;
}
