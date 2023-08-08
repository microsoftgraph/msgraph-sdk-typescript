import type {Printer} from './printer';
import type {PrinterCollectionResponse} from './printerCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrinter} from './serializePrinter';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterCollectionResponse(writer: SerializationWriter, printerCollectionResponse: PrinterCollectionResponse | undefined = {} as PrinterCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printerCollectionResponse)
        writer.writeCollectionOfObjectValues<Printer>("value", printerCollectionResponse.value, serializePrinter);
}
