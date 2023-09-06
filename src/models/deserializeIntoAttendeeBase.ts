import { type AttendeeBase } from './attendeeBase';
import { AttendeeType } from './attendeeType';
import { deserializeIntoRecipient } from './deserializeIntoRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendeeBase(attendeeBase: AttendeeBase | undefined = {} as AttendeeBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoRecipient(attendeeBase),
        "type": n => { attendeeBase.type = n.getEnumValue<AttendeeType>(AttendeeType); },
    }
}
