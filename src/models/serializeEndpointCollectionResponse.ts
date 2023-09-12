import { type Endpoint } from './endpoint';
import { type EndpointCollectionResponse } from './endpointCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeEndpoint } from './serializeEndpoint';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEndpointCollectionResponse(writer: SerializationWriter, endpointCollectionResponse: EndpointCollectionResponse | undefined = {} as EndpointCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, endpointCollectionResponse)
        writer.writeCollectionOfObjectValues<Endpoint>("value", endpointCollectionResponse.value, serializeEndpoint);
}
