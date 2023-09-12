import { deserializeIntoPrinterStatus } from './deserializeIntoPrinterStatus';
import { type PrinterStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrinterStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterStatus;
}
