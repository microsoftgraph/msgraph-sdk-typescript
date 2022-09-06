import {Attendee, AttendeeBase, Recipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : Recipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.attendee":
                    return new Attendee();
                case "#microsoft.graph.attendeeBase":
                    return new AttendeeBase();
            }
        }
    }
    return new Recipient();
}
