import {deserializeIntoPrinterLocation} from './deserializeIntoPrinterLocation';
import {PrinterLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterLocation;
}
