import { deserializeIntoServiceEndpoint } from './deserializeIntoServiceEndpoint';
import { type ServiceEndpoint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceEndpoint;
}
