import type {PrintServiceEndpoint} from './printServiceEndpoint';
import type {PrintServiceEndpointCollectionResponse} from './printServiceEndpointCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintServiceEndpoint} from './serializePrintServiceEndpoint';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintServiceEndpointCollectionResponse(writer: SerializationWriter, printServiceEndpointCollectionResponse: PrintServiceEndpointCollectionResponse | undefined = {} as PrintServiceEndpointCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printServiceEndpointCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintServiceEndpoint>("value", printServiceEndpointCollectionResponse.value, serializePrintServiceEndpoint);
}
