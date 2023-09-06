import { deserializeIntoPrinterShare } from './deserializeIntoPrinterShare';
import { type PrinterShare } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrinterShareFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterShare;
}
