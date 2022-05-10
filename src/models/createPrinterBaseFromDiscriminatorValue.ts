import {PrinterBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterBaseImpl();
}
