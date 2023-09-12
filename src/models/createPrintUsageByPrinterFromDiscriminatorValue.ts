import { deserializeIntoPrintUsageByPrinter } from './deserializeIntoPrintUsageByPrinter';
import { type PrintUsageByPrinter } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintUsageByPrinterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintUsageByPrinter;
}
