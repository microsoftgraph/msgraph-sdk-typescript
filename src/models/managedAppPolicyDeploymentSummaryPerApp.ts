import {MobileAppIdentifier} from './mobileAppIdentifier';

export interface ManagedAppPolicyDeploymentSummaryPerApp{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Number of users the policy is applied. */
    configurationAppliedUserCount?:number | undefined;
    /** Deployment of an app. */
    mobileAppIdentifier?:MobileAppIdentifier | undefined;
}
