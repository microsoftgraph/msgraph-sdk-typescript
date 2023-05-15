import {deserializeIntoOnenoteOperation} from './deserializeIntoOnenoteOperation';
import {deserializeIntoOperation} from './deserializeIntoOperation';
import {OnenoteOperation, Operation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.onenoteOperation":
                    return deserializeIntoOnenoteOperation;
            }
        }
    }
    return deserializeIntoOperation;
}
