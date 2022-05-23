import {PrintOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.printOperation":
                    return new PrintOperationImpl();
            }
        }
    }
    return new PrintOperationImpl();
}
