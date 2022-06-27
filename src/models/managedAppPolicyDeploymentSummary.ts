import {Entity} from './entity';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyDeploymentSummary extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Not yet documented */
    configurationDeployedUserCount?: number | undefined;
    /** Not yet documented */
    configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[] | undefined;
    /** Not yet documented */
    displayName?: string | undefined;
    /** Not yet documented */
    lastRefreshTime?: Date | undefined;
    /** Version of the entity. */
    version?: string | undefined;
}
