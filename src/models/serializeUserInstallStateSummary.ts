import type {DeviceInstallState} from './deviceInstallState';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {serializeEntity} from './serializeEntity';
import type {UserInstallStateSummary} from './userInstallStateSummary';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserInstallStateSummary(writer: SerializationWriter, userInstallStateSummary: UserInstallStateSummary | undefined = {} as UserInstallStateSummary) : void {
        serializeEntity(writer, userInstallStateSummary)
        writer.writeCollectionOfObjectValues<DeviceInstallState>("deviceStates", userInstallStateSummary.deviceStates, serializeDeviceInstallState);
        writer.writeNumberValue("failedDeviceCount", userInstallStateSummary.failedDeviceCount);
        writer.writeNumberValue("installedDeviceCount", userInstallStateSummary.installedDeviceCount);
        writer.writeNumberValue("notInstalledDeviceCount", userInstallStateSummary.notInstalledDeviceCount);
        writer.writeStringValue("userName", userInstallStateSummary.userName);
}
