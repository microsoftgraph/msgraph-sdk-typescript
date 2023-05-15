import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoMeetingInfo} from './deserializeIntoMeetingInfo';
import {IdentitySet} from './identitySet';
import {OrganizerMeetingInfo} from './organizerMeetingInfo';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizerMeetingInfo(organizerMeetingInfo: OrganizerMeetingInfo | undefined = {} as OrganizerMeetingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMeetingInfo(organizerMeetingInfo),
        "organizer": n => { organizerMeetingInfo.organizer = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
