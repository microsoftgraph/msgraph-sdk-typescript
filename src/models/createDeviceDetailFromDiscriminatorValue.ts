import {deserializeIntoDeviceDetail} from './deserializeIntoDeviceDetail';
import {DeviceDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceDetail;
}
