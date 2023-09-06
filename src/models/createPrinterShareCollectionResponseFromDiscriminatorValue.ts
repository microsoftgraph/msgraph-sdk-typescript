import { deserializeIntoPrinterShareCollectionResponse } from './deserializeIntoPrinterShareCollectionResponse';
import { type PrinterShareCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrinterShareCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterShareCollectionResponse;
}
