import {deserializeIntoAttendee} from './deserializeIntoAttendee';
import {deserializeIntoAttendeeBase} from './deserializeIntoAttendeeBase';
import {Attendee, AttendeeBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.attendee":
                    return deserializeIntoAttendee;
            }
        }
    }
    return deserializeIntoAttendeeBase;
}
