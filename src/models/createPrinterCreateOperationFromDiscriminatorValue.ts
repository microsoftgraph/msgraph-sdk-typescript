import {PrinterCreateOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterCreateOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterCreateOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterCreateOperationImpl();
}
