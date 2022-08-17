import {ServiceEndpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceEndpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceEndpoint();
}
