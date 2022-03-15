import {ManagedDeviceCollectionResponse} from './managedDeviceCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceCollectionResponse();
}
