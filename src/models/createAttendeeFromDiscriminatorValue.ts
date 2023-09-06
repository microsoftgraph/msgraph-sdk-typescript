import { deserializeIntoAttendee } from './deserializeIntoAttendee';
import { type Attendee } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttendeeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttendee;
}
