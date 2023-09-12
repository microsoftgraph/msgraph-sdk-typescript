import { deserializeIntoRemoteItem } from './deserializeIntoRemoteItem';
import { type RemoteItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemoteItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoteItem;
}
