import {Printer} from './printer';
import {PrinterCreateOperation} from './printerCreateOperation';
import {serializePrinter} from './serializePrinter';
import {serializePrintOperation} from './serializePrintOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterCreateOperation(writer: SerializationWriter, printerCreateOperation: PrinterCreateOperation | undefined = {} as PrinterCreateOperation) : void {
        serializePrintOperation(writer, printerCreateOperation)
        writer.writeStringValue("certificate", printerCreateOperation.certificate);
        writer.writeObjectValue<Printer>("printer", printerCreateOperation.printer, serializePrinter);
}
