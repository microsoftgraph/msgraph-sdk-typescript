import {PrinterShare} from './printerShare';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterShareFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterShare {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterShare();
}
