import {MobileAppIdentifier} from './mobileAppIdentifier';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyDeploymentSummaryPerApp extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Number of users the policy is applied.
     */
    configurationAppliedUserCount?: number | undefined;
    /**
     * Deployment of an app.
     */
    mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
