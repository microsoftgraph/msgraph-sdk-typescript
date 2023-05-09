import {deserializeIntoDeviceCategory} from './deserializeIntoDeviceCategory';
import {DeviceCategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCategory;
}
