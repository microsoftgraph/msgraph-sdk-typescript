import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {MeetingPolicyUpdatedEventMessageDetail} from './meetingPolicyUpdatedEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingPolicyUpdatedEventMessageDetail(meetingPolicyUpdatedEventMessageDetail: MeetingPolicyUpdatedEventMessageDetail | undefined = {} as MeetingPolicyUpdatedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(meetingPolicyUpdatedEventMessageDetail),
        "initiator": n => { meetingPolicyUpdatedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "meetingChatEnabled": n => { meetingPolicyUpdatedEventMessageDetail.meetingChatEnabled = n.getBooleanValue(); },
        "meetingChatId": n => { meetingPolicyUpdatedEventMessageDetail.meetingChatId = n.getStringValue(); },
    }
}
