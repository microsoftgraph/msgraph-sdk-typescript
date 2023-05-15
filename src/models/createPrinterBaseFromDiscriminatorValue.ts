import {deserializeIntoPrinter} from './deserializeIntoPrinter';
import {deserializeIntoPrinterBase} from './deserializeIntoPrinterBase';
import {deserializeIntoPrinterShare} from './deserializeIntoPrinterShare';
import {Printer, PrinterBase, PrinterShare} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.printer":
                    return deserializeIntoPrinter;
                case "#microsoft.graph.printerShare":
                    return deserializeIntoPrinterShare;
            }
        }
    }
    return deserializeIntoPrinterBase;
}
