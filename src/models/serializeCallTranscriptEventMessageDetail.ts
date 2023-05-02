import {CallTranscriptEventMessageDetail} from './callTranscriptEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallTranscriptEventMessageDetail(writer: SerializationWriter, callTranscriptEventMessageDetail: CallTranscriptEventMessageDetail | undefined = {} as CallTranscriptEventMessageDetail) : void {
        serializeEventMessageDetail(writer, callTranscriptEventMessageDetail)
        writer.writeStringValue("callId", callTranscriptEventMessageDetail.callId);
        writer.writeStringValue("callTranscriptICalUid", callTranscriptEventMessageDetail.callTranscriptICalUid);
        writer.writeObjectValue<IdentitySet>("meetingOrganizer", callTranscriptEventMessageDetail.meetingOrganizer, serializeIdentitySet);
}
