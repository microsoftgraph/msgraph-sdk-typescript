import { deserializeIntoPrinterCapabilities } from './deserializeIntoPrinterCapabilities';
import { type PrinterCapabilities } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrinterCapabilitiesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterCapabilities;
}
