import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationSettingState} from './deviceConfigurationSettingState';
import {Entity} from './entity';
import {PolicyPlatformType} from './policyPlatformType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationState extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the policy for this policyBase */
    displayName?: string | undefined;
    /** Platform type that the policy applies to */
    platformType?: PolicyPlatformType | undefined;
    /** Count of how many setting a policy holds */
    settingCount?: number | undefined;
    /** The settingStates property */
    settingStates?: DeviceConfigurationSettingState[] | undefined;
    /** The compliance state of the policy */
    state?: ComplianceStatus | undefined;
    /** The version of the policy */
    version?: number | undefined;
}
