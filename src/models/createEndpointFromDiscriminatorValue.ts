import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {Endpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEndpoint;
}
