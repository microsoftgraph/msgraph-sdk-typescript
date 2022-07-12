import {PrinterCreateOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterCreateOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterCreateOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterCreateOperation();
}
