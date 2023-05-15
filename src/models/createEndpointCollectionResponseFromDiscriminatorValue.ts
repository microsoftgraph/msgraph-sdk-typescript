import {deserializeIntoEndpointCollectionResponse} from './deserializeIntoEndpointCollectionResponse';
import {EndpointCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEndpointCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEndpointCollectionResponse;
}
