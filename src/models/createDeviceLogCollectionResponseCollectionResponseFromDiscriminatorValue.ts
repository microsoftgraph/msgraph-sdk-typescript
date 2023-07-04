import {deserializeIntoDeviceLogCollectionResponseCollectionResponse} from './deserializeIntoDeviceLogCollectionResponseCollectionResponse';
import {DeviceLogCollectionResponseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceLogCollectionResponseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceLogCollectionResponseCollectionResponse;
}
