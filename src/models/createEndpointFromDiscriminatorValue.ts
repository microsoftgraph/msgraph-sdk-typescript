import { deserializeIntoEndpoint } from './deserializeIntoEndpoint';
import { type Endpoint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEndpoint;
}
