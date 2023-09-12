import { type AudioRoutingGroup } from './audioRoutingGroup';
import { type Call } from './call';
import { CallDirection } from './callDirection';
import { type CallMediaState } from './callMediaState';
import { type CallOptions } from './callOptions';
import { type CallRoute } from './callRoute';
import { CallState } from './callState';
import { type CallTranscriptionInfo } from './callTranscriptionInfo';
import { type ChatInfo } from './chatInfo';
import { type CommsOperation } from './commsOperation';
import { type ContentSharingSession } from './contentSharingSession';
import { createAudioRoutingGroupFromDiscriminatorValue } from './createAudioRoutingGroupFromDiscriminatorValue';
import { createCallMediaStateFromDiscriminatorValue } from './createCallMediaStateFromDiscriminatorValue';
import { createCallOptionsFromDiscriminatorValue } from './createCallOptionsFromDiscriminatorValue';
import { createCallRouteFromDiscriminatorValue } from './createCallRouteFromDiscriminatorValue';
import { createCallTranscriptionInfoFromDiscriminatorValue } from './createCallTranscriptionInfoFromDiscriminatorValue';
import { createChatInfoFromDiscriminatorValue } from './createChatInfoFromDiscriminatorValue';
import { createCommsOperationFromDiscriminatorValue } from './createCommsOperationFromDiscriminatorValue';
import { createContentSharingSessionFromDiscriminatorValue } from './createContentSharingSessionFromDiscriminatorValue';
import { createIncomingContextFromDiscriminatorValue } from './createIncomingContextFromDiscriminatorValue';
import { createInvitationParticipantInfoFromDiscriminatorValue } from './createInvitationParticipantInfoFromDiscriminatorValue';
import { createMediaConfigFromDiscriminatorValue } from './createMediaConfigFromDiscriminatorValue';
import { createMeetingInfoFromDiscriminatorValue } from './createMeetingInfoFromDiscriminatorValue';
import { createParticipantFromDiscriminatorValue } from './createParticipantFromDiscriminatorValue';
import { createParticipantInfoFromDiscriminatorValue } from './createParticipantInfoFromDiscriminatorValue';
import { createResultInfoFromDiscriminatorValue } from './createResultInfoFromDiscriminatorValue';
import { createToneInfoFromDiscriminatorValue } from './createToneInfoFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type IncomingContext } from './incomingContext';
import { type InvitationParticipantInfo } from './invitationParticipantInfo';
import { type MediaConfig } from './mediaConfig';
import { type MeetingInfo } from './meetingInfo';
import { Modality } from './modality';
import { type Participant } from './participant';
import { type ParticipantInfo } from './participantInfo';
import { type ResultInfo } from './resultInfo';
import { serializeAudioRoutingGroup } from './serializeAudioRoutingGroup';
import { serializeCallMediaState } from './serializeCallMediaState';
import { serializeCallOptions } from './serializeCallOptions';
import { serializeCallRoute } from './serializeCallRoute';
import { serializeCallTranscriptionInfo } from './serializeCallTranscriptionInfo';
import { serializeChatInfo } from './serializeChatInfo';
import { serializeCommsOperation } from './serializeCommsOperation';
import { serializeContentSharingSession } from './serializeContentSharingSession';
import { serializeIncomingContext } from './serializeIncomingContext';
import { serializeInvitationParticipantInfo } from './serializeInvitationParticipantInfo';
import { serializeMediaConfig } from './serializeMediaConfig';
import { serializeMeetingInfo } from './serializeMeetingInfo';
import { serializeParticipant } from './serializeParticipant';
import { serializeParticipantInfo } from './serializeParticipantInfo';
import { serializeResultInfo } from './serializeResultInfo';
import { serializeToneInfo } from './serializeToneInfo';
import { type ToneInfo } from './toneInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCall(call: Call | undefined = {} as Call) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(call),
        "audioRoutingGroups": n => { call.audioRoutingGroups = n.getCollectionOfObjectValues<AudioRoutingGroup>(createAudioRoutingGroupFromDiscriminatorValue); },
        "callbackUri": n => { call.callbackUri = n.getStringValue(); },
        "callChainId": n => { call.callChainId = n.getStringValue(); },
        "callOptions": n => { call.callOptions = n.getObjectValue<CallOptions>(createCallOptionsFromDiscriminatorValue); },
        "callRoutes": n => { call.callRoutes = n.getCollectionOfObjectValues<CallRoute>(createCallRouteFromDiscriminatorValue); },
        "chatInfo": n => { call.chatInfo = n.getObjectValue<ChatInfo>(createChatInfoFromDiscriminatorValue); },
        "contentSharingSessions": n => { call.contentSharingSessions = n.getCollectionOfObjectValues<ContentSharingSession>(createContentSharingSessionFromDiscriminatorValue); },
        "direction": n => { call.direction = n.getEnumValue<CallDirection>(CallDirection); },
        "incomingContext": n => { call.incomingContext = n.getObjectValue<IncomingContext>(createIncomingContextFromDiscriminatorValue); },
        "mediaConfig": n => { call.mediaConfig = n.getObjectValue<MediaConfig>(createMediaConfigFromDiscriminatorValue); },
        "mediaState": n => { call.mediaState = n.getObjectValue<CallMediaState>(createCallMediaStateFromDiscriminatorValue); },
        "meetingInfo": n => { call.meetingInfo = n.getObjectValue<MeetingInfo>(createMeetingInfoFromDiscriminatorValue); },
        "myParticipantId": n => { call.myParticipantId = n.getStringValue(); },
        "operations": n => { call.operations = n.getCollectionOfObjectValues<CommsOperation>(createCommsOperationFromDiscriminatorValue); },
        "participants": n => { call.participants = n.getCollectionOfObjectValues<Participant>(createParticipantFromDiscriminatorValue); },
        "requestedModalities": n => { call.requestedModalities = n.getCollectionOfEnumValues<Modality>(Modality); },
        "resultInfo": n => { call.resultInfo = n.getObjectValue<ResultInfo>(createResultInfoFromDiscriminatorValue); },
        "source": n => { call.source = n.getObjectValue<ParticipantInfo>(createParticipantInfoFromDiscriminatorValue); },
        "state": n => { call.state = n.getEnumValue<CallState>(CallState); },
        "subject": n => { call.subject = n.getStringValue(); },
        "targets": n => { call.targets = n.getCollectionOfObjectValues<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
        "tenantId": n => { call.tenantId = n.getStringValue(); },
        "toneInfo": n => { call.toneInfo = n.getObjectValue<ToneInfo>(createToneInfoFromDiscriminatorValue); },
        "transcription": n => { call.transcription = n.getObjectValue<CallTranscriptionInfo>(createCallTranscriptionInfoFromDiscriminatorValue); },
    }
}
