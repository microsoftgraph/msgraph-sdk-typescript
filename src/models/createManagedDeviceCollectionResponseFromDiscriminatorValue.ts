import {ManagedDeviceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceCollectionResponseImpl();
}
