import { deserializeIntoPrinterCreateOperation } from './deserializeIntoPrinterCreateOperation';
import { type PrinterCreateOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrinterCreateOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterCreateOperation;
}
