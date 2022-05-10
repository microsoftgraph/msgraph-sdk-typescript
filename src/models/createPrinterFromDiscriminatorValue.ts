import {PrinterImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterImpl();
}
