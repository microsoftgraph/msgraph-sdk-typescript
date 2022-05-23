import {DeviceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCollectionResponseImpl();
}
