import {Endpoint} from './endpoint';
import {EndpointCollectionResponse} from './endpointCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEndpoint} from './serializeEndpoint';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEndpointCollectionResponse(endpointCollectionResponse: EndpointCollectionResponse | undefined = {} as EndpointCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, endpointCollectionResponse)
        writer.writeCollectionOfObjectValues<Endpoint>("value", endpointCollectionResponse.value, serializeEndpoint);
}
