import {ComplianceStatus} from './complianceStatus';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceSettingState extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The DateTime when device compliance grace period expires */
    complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** The Device Id that is being reported */
    deviceId?: string | undefined;
    /** The device model that is being reported */
    deviceModel?: string | undefined;
    /** The Device Name that is being reported */
    deviceName?: string | undefined;
    /** The setting class name and property name. */
    setting?: string | undefined;
    /** The Setting Name that is being reported */
    settingName?: string | undefined;
    /** The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned. */
    state?: ComplianceStatus | undefined;
    /** The User email address that is being reported */
    userEmail?: string | undefined;
    /** The user Id that is being reported */
    userId?: string | undefined;
    /** The User Name that is being reported */
    userName?: string | undefined;
    /** The User PrincipalName that is being reported */
    userPrincipalName?: string | undefined;
}
