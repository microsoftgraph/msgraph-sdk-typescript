import {Entity} from './entity';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyDeploymentSummary extends Entity, Parsable {
    /**
     * Not yet documented
     */
    configurationDeployedUserCount?: number | undefined;
    /**
     * Not yet documented
     */
    configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[] | undefined;
    /**
     * Not yet documented
     */
    displayName?: string | undefined;
    /**
     * Not yet documented
     */
    lastRefreshTime?: Date | undefined;
    /**
     * Version of the entity.
     */
    version?: string | undefined;
}
