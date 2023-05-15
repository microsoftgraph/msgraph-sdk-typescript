import {deserializeIntoNetworkDaysPostRequestBody} from './deserializeIntoNetworkDaysPostRequestBody';
import {NetworkDaysPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNetworkDaysPostRequestBody;
}
