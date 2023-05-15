import {deserializeIntoNetworkDays_IntlPostRequestBody} from './deserializeIntoNetworkDays_IntlPostRequestBody';
import {NetworkDays_IntlPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkDays_IntlPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNetworkDays_IntlPostRequestBody;
}
