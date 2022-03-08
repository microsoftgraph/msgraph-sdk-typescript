import {PrinterDefaults} from './printerDefaults';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterDefaultsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterDefaults {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterDefaults();
}
