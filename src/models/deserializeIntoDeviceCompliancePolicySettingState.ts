import {ComplianceStatus} from './complianceStatus';
import {createSettingSourceFromDiscriminatorValue} from './createSettingSourceFromDiscriminatorValue';
import {DeviceCompliancePolicySettingState} from './deviceCompliancePolicySettingState';
import {serializeSettingSource} from './serializeSettingSource';
import {SettingSource} from './settingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicySettingState(deviceCompliancePolicySettingState: DeviceCompliancePolicySettingState | undefined = {} as DeviceCompliancePolicySettingState) : Record<string, (node: ParseNode) => void> {
    return {
        "currentValue": n => { deviceCompliancePolicySettingState.currentValue = n.getStringValue(); },
        "errorCode": n => { deviceCompliancePolicySettingState.errorCode = n.getNumberValue(); },
        "errorDescription": n => { deviceCompliancePolicySettingState.errorDescription = n.getStringValue(); },
        "instanceDisplayName": n => { deviceCompliancePolicySettingState.instanceDisplayName = n.getStringValue(); },
        "@odata.type": n => { deviceCompliancePolicySettingState.odataType = n.getStringValue(); },
        "setting": n => { deviceCompliancePolicySettingState.setting = n.getStringValue(); },
        "settingName": n => { deviceCompliancePolicySettingState.settingName = n.getStringValue(); },
        "sources": n => { deviceCompliancePolicySettingState.sources = n.getCollectionOfObjectValues<SettingSource>(createSettingSourceFromDiscriminatorValue); },
        "state": n => { deviceCompliancePolicySettingState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userEmail": n => { deviceCompliancePolicySettingState.userEmail = n.getStringValue(); },
        "userId": n => { deviceCompliancePolicySettingState.userId = n.getStringValue(); },
        "userName": n => { deviceCompliancePolicySettingState.userName = n.getStringValue(); },
        "userPrincipalName": n => { deviceCompliancePolicySettingState.userPrincipalName = n.getStringValue(); },
    }
}
