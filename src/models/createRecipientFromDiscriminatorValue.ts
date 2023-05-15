import {deserializeIntoAttendee} from './deserializeIntoAttendee';
import {deserializeIntoAttendeeBase} from './deserializeIntoAttendeeBase';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {Attendee, AttendeeBase, Recipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.attendee":
                    return deserializeIntoAttendee;
                case "#microsoft.graph.attendeeBase":
                    return deserializeIntoAttendeeBase;
            }
        }
    }
    return deserializeIntoRecipient;
}
