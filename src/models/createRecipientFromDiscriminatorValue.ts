import {AttendeeBaseImpl, RecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.attendeeBase":
                    return new AttendeeBaseImpl();
            }
        }
    }
    return new RecipientImpl();
}
