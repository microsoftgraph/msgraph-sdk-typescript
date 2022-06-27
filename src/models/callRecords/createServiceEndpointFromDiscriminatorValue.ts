import {ServiceEndpointImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceEndpointImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceEndpointImpl();
}
