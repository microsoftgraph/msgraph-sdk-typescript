import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {MeetingParticipantInfo} from './meetingParticipantInfo';
import {OnlineMeetingRole} from './onlineMeetingRole';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingParticipantInfo(meetingParticipantInfo: MeetingParticipantInfo | undefined = {} as MeetingParticipantInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "identity": n => { meetingParticipantInfo.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "@odata.type": n => { meetingParticipantInfo.odataType = n.getStringValue(); },
        "role": n => { meetingParticipantInfo.role = n.getEnumValue<OnlineMeetingRole>(OnlineMeetingRole); },
        "upn": n => { meetingParticipantInfo.upn = n.getStringValue(); },
    }
}
