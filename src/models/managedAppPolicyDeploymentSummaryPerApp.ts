import {MobileAppIdentifier} from './mobileAppIdentifier';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyDeploymentSummaryPerApp extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Number of users the policy is applied. */
    configurationAppliedUserCount?: number | undefined;
    /** Deployment of an app. */
    mobileAppIdentifier?: MobileAppIdentifier | undefined;
}
