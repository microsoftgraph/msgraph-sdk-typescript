import {DeviceInstallState} from './deviceInstallState';
import {InstallState} from './installState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceInstallState(writer: SerializationWriter, deviceInstallState: DeviceInstallState | undefined = {} as DeviceInstallState) : void {
        serializeEntity(writer, deviceInstallState)
        writer.writeStringValue("deviceId", deviceInstallState.deviceId);
        writer.writeStringValue("deviceName", deviceInstallState.deviceName);
        writer.writeStringValue("errorCode", deviceInstallState.errorCode);
        writer.writeEnumValue<InstallState>("installState", deviceInstallState.installState);
        writer.writeDateValue("lastSyncDateTime", deviceInstallState.lastSyncDateTime);
        writer.writeStringValue("osDescription", deviceInstallState.osDescription);
        writer.writeStringValue("osVersion", deviceInstallState.osVersion);
        writer.writeStringValue("userName", deviceInstallState.userName);
}
