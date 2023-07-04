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
     * The countSuccessiveCompleteFailures property
     */
    countSuccessiveCompleteFailures?: number | undefined;
    /**
     * The escrowsPruned property
     */
    escrowsPruned?: boolean | undefined;
    /**
     * The lastExecution property
     */
    lastExecution?: SynchronizationTaskExecution | undefined;
    /**
     * The lastSuccessfulExecution property
     */
    lastSuccessfulExecution?: SynchronizationTaskExecution | undefined;
    /**
     * The lastSuccessfulExecutionWithExports property
     */
    lastSuccessfulExecutionWithExports?: SynchronizationTaskExecution | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The progress property
     */
    progress?: SynchronizationProgress[] | undefined;
    /**
     * The quarantine property
     */
    quarantine?: SynchronizationQuarantine | undefined;
    /**
     * The steadyStateFirstAchievedTime property
     */
    steadyStateFirstAchievedTime?: Date | undefined;
    /**
     * The steadyStateLastAchievedTime property
     */
    steadyStateLastAchievedTime?: Date | undefined;
    /**
     * The synchronizedEntryCountByType property
     */
    synchronizedEntryCountByType?: StringKeyLongValuePair[] | undefined;
    /**
     * The troubleshootingUrl property
     */
    troubleshootingUrl?: string | undefined;
}
