import { type PrinterShare } from './printerShare';
import { type PrinterShareCollectionResponse } from './printerShareCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializePrinterShare } from './serializePrinterShare';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrinterShareCollectionResponse(writer: SerializationWriter, printerShareCollectionResponse: PrinterShareCollectionResponse | undefined = {} as PrinterShareCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printerShareCollectionResponse)
        writer.writeCollectionOfObjectValues<PrinterShare>("value", printerShareCollectionResponse.value, serializePrinterShare);
}
