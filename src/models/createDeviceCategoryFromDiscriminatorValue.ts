import {DeviceCategoryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCategoryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCategoryImpl();
}
