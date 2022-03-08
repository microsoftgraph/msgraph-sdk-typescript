import {DeviceCategory} from './deviceCategory';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCategory();
}
