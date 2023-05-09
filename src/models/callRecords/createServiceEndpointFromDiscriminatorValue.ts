import {deserializeIntoServiceEndpoint} from './deserializeIntoServiceEndpoint';
import {ServiceEndpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceEndpoint;
}
