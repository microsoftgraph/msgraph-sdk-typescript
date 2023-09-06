import { createDeviceInstallStateFromDiscriminatorValue } from './createDeviceInstallStateFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceInstallState } from './deviceInstallState';
import { serializeDeviceInstallState } from './serializeDeviceInstallState';
import { type UserInstallStateSummary } from './userInstallStateSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserInstallStateSummary(userInstallStateSummary: UserInstallStateSummary | undefined = {} as UserInstallStateSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userInstallStateSummary),
        "deviceStates": n => { userInstallStateSummary.deviceStates = n.getCollectionOfObjectValues<DeviceInstallState>(createDeviceInstallStateFromDiscriminatorValue); },
        "failedDeviceCount": n => { userInstallStateSummary.failedDeviceCount = n.getNumberValue(); },
        "installedDeviceCount": n => { userInstallStateSummary.installedDeviceCount = n.getNumberValue(); },
        "notInstalledDeviceCount": n => { userInstallStateSummary.notInstalledDeviceCount = n.getNumberValue(); },
        "userName": n => { userInstallStateSummary.userName = n.getStringValue(); },
    }
}
