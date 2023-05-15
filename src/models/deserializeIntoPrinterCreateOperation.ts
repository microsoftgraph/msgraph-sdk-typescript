import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {deserializeIntoPrintOperation} from './deserializeIntoPrintOperation';
import {Printer} from './printer';
import {PrinterCreateOperation} from './printerCreateOperation';
import {serializePrinter} from './serializePrinter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterCreateOperation(printerCreateOperation: PrinterCreateOperation | undefined = {} as PrinterCreateOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintOperation(printerCreateOperation),
        "certificate": n => { printerCreateOperation.certificate = n.getStringValue(); },
        "printer": n => { printerCreateOperation.printer = n.getObjectValue<Printer>(createPrinterFromDiscriminatorValue); },
    }
}
