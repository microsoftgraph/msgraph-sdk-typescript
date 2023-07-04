import {ComplianceStatus} from './complianceStatus';
import {SettingSource} from './settingSource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicySettingState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Current value of setting on device
     */
    currentValue?: string | undefined;
    /**
     * Error code for the setting
     */
    errorCode?: number | undefined;
    /**
     * Error description
     */
    errorDescription?: string | undefined;
    /**
     * Name of setting instance that is being reported.
     */
    instanceDisplayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The setting that is being reported
     */
    setting?: string | undefined;
    /**
     * Localized/user friendly setting name that is being reported
     */
    settingName?: string | undefined;
    /**
     * Contributing policies
     */
    sources?: SettingSource[] | undefined;
    /**
     * The state property
     */
    state?: ComplianceStatus | undefined;
    /**
     * UserEmail
     */
    userEmail?: string | undefined;
    /**
     * UserId
     */
    userId?: string | undefined;
    /**
     * UserName
     */
    userName?: string | undefined;
    /**
     * UserPrincipalName.
     */
    userPrincipalName?: string | undefined;
}
