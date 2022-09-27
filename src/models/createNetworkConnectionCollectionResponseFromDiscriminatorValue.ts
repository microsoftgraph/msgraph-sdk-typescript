import {NetworkConnectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkConnectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : NetworkConnectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NetworkConnectionCollectionResponse();
}
