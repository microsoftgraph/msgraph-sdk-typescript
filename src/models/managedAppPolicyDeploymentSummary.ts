import {Entity} from './entity';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';

export interface ManagedAppPolicyDeploymentSummary extends Entity{
    /** Not yet documented */
    configurationDeployedUserCount?:number | undefined;
    /** Not yet documented */
    configurationDeploymentSummaryPerApp?:ManagedAppPolicyDeploymentSummaryPerApp[] | undefined;
    /** Not yet documented */
    displayName?:string | undefined;
    /** Not yet documented */
    lastRefreshTime?:Date | undefined;
    /** Version of the entity. */
    version?:string | undefined;
}
