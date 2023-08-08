import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoMeetingInfo} from './deserializeIntoMeetingInfo';
import type {IdentitySet} from './identitySet';
import type {OrganizerMeetingInfo} from './organizerMeetingInfo';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizerMeetingInfo(organizerMeetingInfo: OrganizerMeetingInfo | undefined = {} as OrganizerMeetingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMeetingInfo(organizerMeetingInfo),
        "organizer": n => { organizerMeetingInfo.organizer = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
