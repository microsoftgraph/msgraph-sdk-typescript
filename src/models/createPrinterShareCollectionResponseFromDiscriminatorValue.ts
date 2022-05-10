import {PrinterShareCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterShareCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterShareCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterShareCollectionResponseImpl();
}
