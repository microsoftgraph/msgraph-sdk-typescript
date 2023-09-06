import { deserializeIntoNetworkConnection } from './deserializeIntoNetworkConnection';
import { type NetworkConnection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNetworkConnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNetworkConnection;
}
