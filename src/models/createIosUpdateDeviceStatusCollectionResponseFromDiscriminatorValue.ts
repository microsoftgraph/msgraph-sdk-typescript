import { deserializeIntoIosUpdateDeviceStatusCollectionResponse } from './deserializeIntoIosUpdateDeviceStatusCollectionResponse';
import { type IosUpdateDeviceStatusCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosUpdateDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosUpdateDeviceStatusCollectionResponse;
}
