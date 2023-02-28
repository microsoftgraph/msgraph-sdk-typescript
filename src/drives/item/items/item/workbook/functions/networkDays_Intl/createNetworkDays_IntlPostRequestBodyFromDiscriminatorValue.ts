import {NetworkDays_IntlPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkDays_IntlPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : NetworkDays_IntlPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NetworkDays_IntlPostRequestBody();
}
