import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceUserOverview extends Entity, Parsable {
    /**
     * Version of the policy for that overview
     */
    configurationVersion?: number | undefined;
    /**
     * Number of error Users
     */
    errorCount?: number | undefined;
    /**
     * Number of failed Users
     */
    failedCount?: number | undefined;
    /**
     * Last update time
     */
    lastUpdateDateTime?: Date | undefined;
    /**
     * Number of not applicable users
     */
    notApplicableCount?: number | undefined;
    /**
     * Number of pending Users
     */
    pendingCount?: number | undefined;
    /**
     * Number of succeeded Users
     */
    successCount?: number | undefined;
}
