import {PrinterStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterStatusImpl();
}
