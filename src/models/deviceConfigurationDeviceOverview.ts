import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationDeviceOverview extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Version of the policy for that overview */
    configurationVersion?: number | undefined;
    /** Number of error devices */
    errorCount?: number | undefined;
    /** Number of failed devices */
    failedCount?: number | undefined;
    /** Last update time */
    lastUpdateDateTime?: Date | undefined;
    /** Number of not applicable devices */
    notApplicableCount?: number | undefined;
    /** Number of pending devices */
    pendingCount?: number | undefined;
    /** Number of succeeded devices */
    successCount?: number | undefined;
}
