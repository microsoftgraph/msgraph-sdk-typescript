import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationDeviceOverview extends Entity, Parsable {
    /**
     * Version of the policy for that overview
     */
    configurationVersion?: number | undefined;
    /**
     * Number of error devices
     */
    errorCount?: number | undefined;
    /**
     * Number of failed devices
     */
    failedCount?: number | undefined;
    /**
     * Last update time
     */
    lastUpdateDateTime?: Date | undefined;
    /**
     * Number of not applicable devices
     */
    notApplicableCount?: number | undefined;
    /**
     * Number of pending devices
     */
    pendingCount?: number | undefined;
    /**
     * Number of succeeded devices
     */
    successCount?: number | undefined;
}
