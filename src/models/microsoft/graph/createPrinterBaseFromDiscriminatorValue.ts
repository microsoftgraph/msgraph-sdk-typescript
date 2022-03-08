import {PrinterBase} from './printerBase';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterBase();
}
