import {AttendeeBase} from './attendeeBase';
import {AttendeeType} from './attendeeType';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendeeBase(attendeeBase: AttendeeBase | undefined = {} as AttendeeBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRecipient(attendeeBase),
        "type": n => { attendeeBase.type = n.getEnumValue<AttendeeType>(AttendeeType); },
    }
}
