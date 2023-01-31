import {NetworkDaysPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : NetworkDaysPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NetworkDaysPostRequestBody();
}
