import {SynchronizationError} from './synchronizationError';
import {SynchronizationTaskExecutionResult} from './synchronizationTaskExecutionResult';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationTaskExecution extends AdditionalDataHolder, Parsable {
    /**
     * Identifier of the job run.
     */
    activityIdentifier?: string | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Count of processed entries that were assigned for this application.
     */
    countEntitled?: number | undefined;
    /**
     * Count of processed entries that were assigned for provisioning.
     */
    countEntitledForProvisioning?: number | undefined;
    /**
     * Count of entries that were escrowed (errors).
     */
    countEscrowed?: number | undefined;
    /**
     * Count of entries that were escrowed, including system-generated escrows.
     */
    countEscrowedRaw?: number | undefined;
    /**
     * Count of exported entries.
     */
    countExported?: number | undefined;
    /**
     * Count of entries that were expected to be exported.
     */
    countExports?: number | undefined;
    /**
     * Count of imported entries.
     */
    countImported?: number | undefined;
    /**
     * Count of imported delta-changes.
     */
    countImportedDeltas?: number | undefined;
    /**
     * Count of imported delta-changes pertaining to reference changes.
     */
    countImportedReferenceDeltas?: number | undefined;
    /**
     * If an error was encountered, contains a synchronizationError object with details.
     */
    errorEscaped?: SynchronizationError | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The state property
     */
    state?: SynchronizationTaskExecutionResult | undefined;
    /**
     * Time when this job run began. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    timeBegan?: Date | undefined;
    /**
     * Time when this job run ended. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    timeEnded?: Date | undefined;
}
