import {deserializeIntoPrintUsageByPrinterCollectionResponse} from './deserializeIntoPrintUsageByPrinterCollectionResponse';
import {PrintUsageByPrinterCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintUsageByPrinterCollectionResponse;
}
