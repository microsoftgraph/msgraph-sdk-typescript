import { deserializeIntoPrintUsageByPrinterCollectionResponse } from './deserializeIntoPrintUsageByPrinterCollectionResponse';
import { type PrintUsageByPrinterCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintUsageByPrinterCollectionResponse;
}
