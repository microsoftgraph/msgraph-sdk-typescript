import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ConfigurationManagerClientEnabledFeatures extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Whether compliance policy is managed by Intune */
    compliancePolicy?: boolean | undefined;
    /** Whether device configuration is managed by Intune */
    deviceConfiguration?: boolean | undefined;
    /** Whether inventory is managed by Intune */
    inventory?: boolean | undefined;
    /** Whether modern application is managed by Intune */
    modernApps?: boolean | undefined;
    /** Whether resource access is managed by Intune */
    resourceAccess?: boolean | undefined;
    /** Whether Windows Update for Business is managed by Intune */
    windowsUpdateForBusiness?: boolean | undefined;
}
