import {ComplianceStatus} from './complianceStatus';
import {createSettingSourceFromDiscriminatorValue} from './createSettingSourceFromDiscriminatorValue';
import {DeviceConfigurationSettingState} from './deviceConfigurationSettingState';
import {serializeSettingSource} from './serializeSettingSource';
import {SettingSource} from './settingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationSettingState(deviceConfigurationSettingState: DeviceConfigurationSettingState | undefined = {} as DeviceConfigurationSettingState) : Record<string, (node: ParseNode) => void> {
    return {
        "currentValue": n => { deviceConfigurationSettingState.currentValue = n.getStringValue(); },
        "errorCode": n => { deviceConfigurationSettingState.errorCode = n.getNumberValue(); },
        "errorDescription": n => { deviceConfigurationSettingState.errorDescription = n.getStringValue(); },
        "instanceDisplayName": n => { deviceConfigurationSettingState.instanceDisplayName = n.getStringValue(); },
        "@odata.type": n => { deviceConfigurationSettingState.odataType = n.getStringValue(); },
        "setting": n => { deviceConfigurationSettingState.setting = n.getStringValue(); },
        "settingName": n => { deviceConfigurationSettingState.settingName = n.getStringValue(); },
        "sources": n => { deviceConfigurationSettingState.sources = n.getCollectionOfObjectValues<SettingSource>(createSettingSourceFromDiscriminatorValue); },
        "state": n => { deviceConfigurationSettingState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userEmail": n => { deviceConfigurationSettingState.userEmail = n.getStringValue(); },
        "userId": n => { deviceConfigurationSettingState.userId = n.getStringValue(); },
        "userName": n => { deviceConfigurationSettingState.userName = n.getStringValue(); },
        "userPrincipalName": n => { deviceConfigurationSettingState.userPrincipalName = n.getStringValue(); },
    }
}
