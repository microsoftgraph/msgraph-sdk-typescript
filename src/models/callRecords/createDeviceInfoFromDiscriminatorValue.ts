import {deserializeIntoDeviceInfo} from './deserializeIntoDeviceInfo';
import {DeviceInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceInfo;
}
