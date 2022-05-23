import {PrinterCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterCollectionResponseImpl();
}
