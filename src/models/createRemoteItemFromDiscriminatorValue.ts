import {RemoteItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoteItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoteItemImpl();
}
