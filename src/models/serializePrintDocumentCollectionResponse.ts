import {PrintDocument} from './printDocument';
import {PrintDocumentCollectionResponse} from './printDocumentCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintDocument} from './serializePrintDocument';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintDocumentCollectionResponse(writer: SerializationWriter, printDocumentCollectionResponse: PrintDocumentCollectionResponse | undefined = {} as PrintDocumentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printDocumentCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintDocument>("value", printDocumentCollectionResponse.value, serializePrintDocument);
}
