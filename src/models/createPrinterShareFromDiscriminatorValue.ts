import {PrinterShareImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterShareFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterShareImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterShareImpl();
}
