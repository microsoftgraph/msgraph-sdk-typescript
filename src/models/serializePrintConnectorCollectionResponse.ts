import type {PrintConnector} from './printConnector';
import type {PrintConnectorCollectionResponse} from './printConnectorCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintConnector} from './serializePrintConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintConnectorCollectionResponse(writer: SerializationWriter, printConnectorCollectionResponse: PrintConnectorCollectionResponse | undefined = {} as PrintConnectorCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printConnectorCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintConnector>("value", printConnectorCollectionResponse.value, serializePrintConnector);
}
