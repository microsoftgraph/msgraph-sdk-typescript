import {createEndpointFromDiscriminatorValue} from './createEndpointFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Endpoint} from './endpoint';
import {EndpointCollectionResponse} from './endpointCollectionResponse';
import {serializeEndpoint} from './serializeEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEndpointCollectionResponse(endpointCollectionResponse: EndpointCollectionResponse | undefined = {} as EndpointCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(endpointCollectionResponse),
        "value": n => { endpointCollectionResponse.value = n.getCollectionOfObjectValues<Endpoint>(createEndpointFromDiscriminatorValue); },
    }
}
