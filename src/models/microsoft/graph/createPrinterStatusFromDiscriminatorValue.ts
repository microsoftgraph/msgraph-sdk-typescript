import {PrinterStatus} from './printerStatus';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterStatus();
}
