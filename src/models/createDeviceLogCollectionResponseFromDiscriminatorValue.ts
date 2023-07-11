import {deserializeIntoDeviceLogCollectionResponse} from './deserializeIntoDeviceLogCollectionResponse';
import {DeviceLogCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceLogCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceLogCollectionResponse;
}
