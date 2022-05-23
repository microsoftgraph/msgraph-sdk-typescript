import {NetworkConnectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkConnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : NetworkConnectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NetworkConnectionImpl();
}
