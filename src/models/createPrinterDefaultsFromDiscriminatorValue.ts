import { deserializeIntoPrinterDefaults } from './deserializeIntoPrinterDefaults';
import { type PrinterDefaults } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrinterDefaultsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterDefaults;
}
