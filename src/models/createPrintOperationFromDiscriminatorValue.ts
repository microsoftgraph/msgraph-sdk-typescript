import {deserializeIntoPrinterCreateOperation} from './deserializeIntoPrinterCreateOperation';
import {deserializeIntoPrintOperation} from './deserializeIntoPrintOperation';
import {PrinterCreateOperation, PrintOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.printerCreateOperation":
                    return deserializeIntoPrinterCreateOperation;
            }
        }
    }
    return deserializeIntoPrintOperation;
}
