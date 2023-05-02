import {deserializeIntoNetworkConnection} from './deserializeIntoNetworkConnection';
import {NetworkConnection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkConnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNetworkConnection;
}
