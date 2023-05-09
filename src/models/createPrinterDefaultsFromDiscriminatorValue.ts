import {deserializeIntoPrinterDefaults} from './deserializeIntoPrinterDefaults';
import {PrinterDefaults} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterDefaultsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrinterDefaults;
}
