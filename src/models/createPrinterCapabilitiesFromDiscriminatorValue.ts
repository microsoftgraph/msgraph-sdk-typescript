import {PrinterCapabilitiesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterCapabilitiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterCapabilitiesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterCapabilitiesImpl();
}
