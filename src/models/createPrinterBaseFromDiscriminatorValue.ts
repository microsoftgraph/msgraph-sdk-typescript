import {PrinterBaseImpl, PrinterImpl, PrinterShareImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.printer":
                    return new PrinterImpl();
                case "#microsoft.graph.printerShare":
                    return new PrinterShareImpl();
            }
        }
    }
    return new PrinterBaseImpl();
}
