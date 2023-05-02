import {CallRecordingEventMessageDetail} from './callRecordingEventMessageDetail';
import {CallRecordingStatus} from './callRecordingStatus';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallRecordingEventMessageDetail(callRecordingEventMessageDetail: CallRecordingEventMessageDetail | undefined = {} as CallRecordingEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(callRecordingEventMessageDetail),
        "callId": n => { callRecordingEventMessageDetail.callId = n.getStringValue(); },
        "callRecordingDisplayName": n => { callRecordingEventMessageDetail.callRecordingDisplayName = n.getStringValue(); },
        "callRecordingDuration": n => { callRecordingEventMessageDetail.callRecordingDuration = n.getDurationValue(); },
        "callRecordingStatus": n => { callRecordingEventMessageDetail.callRecordingStatus = n.getEnumValue<CallRecordingStatus>(CallRecordingStatus); },
        "callRecordingUrl": n => { callRecordingEventMessageDetail.callRecordingUrl = n.getStringValue(); },
        "initiator": n => { callRecordingEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "meetingOrganizer": n => { callRecordingEventMessageDetail.meetingOrganizer = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
