import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosUpdateDeviceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosUpdateDeviceStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosUpdateDeviceStatus();
}
