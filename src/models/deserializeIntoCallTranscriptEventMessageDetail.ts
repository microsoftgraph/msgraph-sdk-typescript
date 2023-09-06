import { type CallTranscriptEventMessageDetail } from './callTranscriptEventMessageDetail';
import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCallTranscriptEventMessageDetail(callTranscriptEventMessageDetail: CallTranscriptEventMessageDetail | undefined = {} as CallTranscriptEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(callTranscriptEventMessageDetail),
        "callId": n => { callTranscriptEventMessageDetail.callId = n.getStringValue(); },
        "callTranscriptICalUid": n => { callTranscriptEventMessageDetail.callTranscriptICalUid = n.getStringValue(); },
        "meetingOrganizer": n => { callTranscriptEventMessageDetail.meetingOrganizer = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
