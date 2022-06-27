import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationUserOverview extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Version of the policy for that overview */
    configurationVersion?: number | undefined;
    /** Number of error Users */
    errorCount?: number | undefined;
    /** Number of failed Users */
    failedCount?: number | undefined;
    /** Last update time */
    lastUpdateDateTime?: Date | undefined;
    /** Number of not applicable users */
    notApplicableCount?: number | undefined;
    /** Number of pending Users */
    pendingCount?: number | undefined;
    /** Number of succeeded Users */
    successCount?: number | undefined;
}
