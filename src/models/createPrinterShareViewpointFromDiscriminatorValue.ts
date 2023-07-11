import {deserializeIntoPrinterShareViewpoint} from './deserializeIntoPrinterShareViewpoint';
import {PrinterShareViewpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterShareViewpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterShareViewpoint;
}
