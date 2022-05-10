import {EndpointImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : EndpointImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EndpointImpl();
}
