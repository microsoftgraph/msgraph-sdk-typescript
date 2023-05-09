import {deserializeIntoPrinterShareCollectionResponse} from './deserializeIntoPrinterShareCollectionResponse';
import {PrinterShareCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterShareCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterShareCollectionResponse;
}
