import {deserializeIntoRemoteItem} from './deserializeIntoRemoteItem';
import {RemoteItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoteItem;
}
