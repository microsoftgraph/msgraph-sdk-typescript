import type {Printer} from './printer';
import type {PrinterCreateOperation} from './printerCreateOperation';
import {serializePrintOperation} from './serializePrintOperation';
import {serializePrinter} from './serializePrinter';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterCreateOperation(writer: SerializationWriter, printerCreateOperation: PrinterCreateOperation | undefined = {} as PrinterCreateOperation) : void {
        serializePrintOperation(writer, printerCreateOperation)
        writer.writeStringValue("certificate", printerCreateOperation.certificate);
        writer.writeObjectValue<Printer>("printer", printerCreateOperation.printer, serializePrinter);
}
