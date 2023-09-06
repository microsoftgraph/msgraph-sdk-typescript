import { deserializeIntoPrinter } from './deserializeIntoPrinter';
import { type Printer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrinterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinter;
}
