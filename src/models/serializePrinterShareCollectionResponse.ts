import {PrinterShare} from './printerShare';
import {PrinterShareCollectionResponse} from './printerShareCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrinterShare} from './serializePrinterShare';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterShareCollectionResponse(writer: SerializationWriter, printerShareCollectionResponse: PrinterShareCollectionResponse | undefined = {} as PrinterShareCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printerShareCollectionResponse)
        writer.writeCollectionOfObjectValues<PrinterShare>("value", printerShareCollectionResponse.value, serializePrinterShare);
}
