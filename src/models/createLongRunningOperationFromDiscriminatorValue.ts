import { deserializeIntoLongRunningOperation } from './deserializeIntoLongRunningOperation';
import { deserializeIntoRichLongRunningOperation } from './deserializeIntoRichLongRunningOperation';
import { type LongRunningOperation, type RichLongRunningOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLongRunningOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.richLongRunningOperation":
                    return deserializeIntoRichLongRunningOperation;
            }
        }
    }
    return deserializeIntoLongRunningOperation;
}
