import {LongRunningOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLongRunningOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : LongRunningOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.longRunningOperation":
                    return new LongRunningOperation();
            }
        }
    }
    return new LongRunningOperation();
}
