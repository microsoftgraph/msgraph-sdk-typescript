import {OperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : OperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.operation":
                    return new OperationImpl();
            }
        }
    }
    return new OperationImpl();
}
