import { deserializeIntoNetworkDaysPostRequestBody } from './deserializeIntoNetworkDaysPostRequestBody';
import { type NetworkDaysPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNetworkDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNetworkDaysPostRequestBody;
}
