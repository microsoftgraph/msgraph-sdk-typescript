import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceInstallState} from './deviceInstallState';
import {InstallState} from './installState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceInstallState(deviceInstallState: DeviceInstallState | undefined = {} as DeviceInstallState) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceInstallState),
        "deviceId": n => { deviceInstallState.deviceId = n.getStringValue(); },
        "deviceName": n => { deviceInstallState.deviceName = n.getStringValue(); },
        "errorCode": n => { deviceInstallState.errorCode = n.getStringValue(); },
        "installState": n => { deviceInstallState.installState = n.getEnumValue<InstallState>(InstallState); },
        "lastSyncDateTime": n => { deviceInstallState.lastSyncDateTime = n.getDateValue(); },
        "osDescription": n => { deviceInstallState.osDescription = n.getStringValue(); },
        "osVersion": n => { deviceInstallState.osVersion = n.getStringValue(); },
        "userName": n => { deviceInstallState.userName = n.getStringValue(); },
    }
}
