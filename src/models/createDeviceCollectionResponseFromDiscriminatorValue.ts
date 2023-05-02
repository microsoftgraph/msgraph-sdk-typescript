import {deserializeIntoDeviceCollectionResponse} from './deserializeIntoDeviceCollectionResponse';
import {DeviceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCollectionResponse;
}
