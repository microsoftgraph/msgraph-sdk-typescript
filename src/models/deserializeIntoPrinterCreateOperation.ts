import { createPrinterFromDiscriminatorValue } from './createPrinterFromDiscriminatorValue';
import { deserializeIntoPrintOperation } from './deserializeIntoPrintOperation';
import { type Printer } from './printer';
import { type PrinterCreateOperation } from './printerCreateOperation';
import { serializePrinter } from './serializePrinter';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterCreateOperation(printerCreateOperation: PrinterCreateOperation | undefined = {} as PrinterCreateOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintOperation(printerCreateOperation),
        "certificate": n => { printerCreateOperation.certificate = n.getStringValue(); },
        "printer": n => { printerCreateOperation.printer = n.getObjectValue<Printer>(createPrinterFromDiscriminatorValue); },
    }
}
