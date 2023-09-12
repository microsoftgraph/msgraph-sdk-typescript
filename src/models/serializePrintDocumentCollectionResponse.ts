import { type PrintDocument } from './printDocument';
import { type PrintDocumentCollectionResponse } from './printDocumentCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializePrintDocument } from './serializePrintDocument';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintDocumentCollectionResponse(writer: SerializationWriter, printDocumentCollectionResponse: PrintDocumentCollectionResponse | undefined = {} as PrintDocumentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printDocumentCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintDocument>("value", printDocumentCollectionResponse.value, serializePrintDocument);
}
