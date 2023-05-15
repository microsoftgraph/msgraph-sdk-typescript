import {deserializeIntoManagedDeviceCollectionResponse} from './deserializeIntoManagedDeviceCollectionResponse';
import {ManagedDeviceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceCollectionResponse;
}
