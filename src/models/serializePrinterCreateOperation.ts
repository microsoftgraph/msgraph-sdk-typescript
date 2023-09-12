import { type Printer } from './printer';
import { type PrinterCreateOperation } from './printerCreateOperation';
import { serializePrinter } from './serializePrinter';
import { serializePrintOperation } from './serializePrintOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrinterCreateOperation(writer: SerializationWriter, printerCreateOperation: PrinterCreateOperation | undefined = {} as PrinterCreateOperation) : void {
        serializePrintOperation(writer, printerCreateOperation)
        writer.writeStringValue("certificate", printerCreateOperation.certificate);
        writer.writeObjectValue<Printer>("printer", printerCreateOperation.printer, serializePrinter);
}
