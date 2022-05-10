import {NetworkInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : NetworkInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NetworkInfoImpl();
}
