import {deserializeIntoPrinterCollectionResponse} from './deserializeIntoPrinterCollectionResponse';
import {PrinterCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterCollectionResponse;
}
