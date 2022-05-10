import {PrintUsageByPrinterCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByPrinterCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageByPrinterCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageByPrinterCollectionResponseImpl();
}
