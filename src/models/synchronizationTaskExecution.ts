import {SynchronizationError} from './synchronizationError';
import {SynchronizationTaskExecutionResult} from './synchronizationTaskExecutionResult';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationTaskExecution extends AdditionalDataHolder, Parsable {
    /**
     * The activityIdentifier property
     */
    activityIdentifier?: string | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The countEntitled property
     */
    countEntitled?: number | undefined;
    /**
     * The countEntitledForProvisioning property
     */
    countEntitledForProvisioning?: number | undefined;
    /**
     * The countEscrowed property
     */
    countEscrowed?: number | undefined;
    /**
     * The countEscrowedRaw property
     */
    countEscrowedRaw?: number | undefined;
    /**
     * The countExported property
     */
    countExported?: number | undefined;
    /**
     * The countExports property
     */
    countExports?: number | undefined;
    /**
     * The countImported property
     */
    countImported?: number | undefined;
    /**
     * The countImportedDeltas property
     */
    countImportedDeltas?: number | undefined;
    /**
     * The countImportedReferenceDeltas property
     */
    countImportedReferenceDeltas?: number | undefined;
    /**
     * The error property
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
     * The timeBegan property
     */
    timeBegan?: Date | undefined;
    /**
     * The timeEnded property
     */
    timeEnded?: Date | undefined;
}
