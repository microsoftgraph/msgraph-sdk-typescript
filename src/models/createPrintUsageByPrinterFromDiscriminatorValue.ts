import {PrintUsageByPrinterImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByPrinterFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageByPrinterImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageByPrinterImpl();
}
