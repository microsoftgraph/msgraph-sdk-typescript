import { deserializeIntoPrinterShareViewpoint } from './deserializeIntoPrinterShareViewpoint';
import { type PrinterShareViewpoint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrinterShareViewpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterShareViewpoint;
}
