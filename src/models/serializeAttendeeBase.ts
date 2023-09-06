import { type AttendeeBase } from './attendeeBase';
import { AttendeeType } from './attendeeType';
import { serializeRecipient } from './serializeRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAttendeeBase(writer: SerializationWriter, attendeeBase: AttendeeBase | undefined = {} as AttendeeBase) : void {
        serializeRecipient(writer, attendeeBase)
        writer.writeEnumValue<AttendeeType>("type", attendeeBase.type);
}
