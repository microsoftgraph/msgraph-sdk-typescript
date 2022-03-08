import {PrinterCollectionResponse} from './printerCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterCollectionResponse();
}
