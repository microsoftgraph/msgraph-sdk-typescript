import { createAudioRoutingGroupFromDiscriminatorValue, serializeAudioRoutingGroup, type AudioRoutingGroup } from './audioRoutingGroup';
import { CallDirection } from './callDirection';
import { createCallMediaStateFromDiscriminatorValue, serializeCallMediaState, type CallMediaState } from './callMediaState';
import { createCallOptionsFromDiscriminatorValue, serializeCallOptions, type CallOptions } from './callOptions';
import { createCallRouteFromDiscriminatorValue, serializeCallRoute, type CallRoute } from './callRoute';
import { CallState } from './callState';
import { createCallTranscriptionInfoFromDiscriminatorValue, serializeCallTranscriptionInfo, type CallTranscriptionInfo } from './callTranscriptionInfo';
import { createChatInfoFromDiscriminatorValue, serializeChatInfo, type ChatInfo } from './chatInfo';
import { createCommsOperationFromDiscriminatorValue, serializeCommsOperation, type CommsOperation } from './commsOperation';
import { createContentSharingSessionFromDiscriminatorValue, serializeContentSharingSession, type ContentSharingSession } from './contentSharingSession';
import { deserializeIntoEntity, serializeEntity, type Entity } from './entity';
import { createIncomingContextFromDiscriminatorValue, serializeIncomingContext, type IncomingContext } from './incomingContext';
import { createInvitationParticipantInfoFromDiscriminatorValue, serializeInvitationParticipantInfo, type InvitationParticipantInfo } from './invitationParticipantInfo';
import { createMediaConfigFromDiscriminatorValue, serializeMediaConfig, type MediaConfig } from './mediaConfig';
import { createMeetingInfoFromDiscriminatorValue, serializeMeetingInfo, type MeetingInfo } from './meetingInfo';
import { Modality } from './modality';
import { createParticipantFromDiscriminatorValue, serializeParticipant, type Participant } from './participant';
import { createParticipantInfoFromDiscriminatorValue, serializeParticipantInfo, type ParticipantInfo } from './participantInfo';
import { createResultInfoFromDiscriminatorValue, serializeResultInfo, type ResultInfo } from './resultInfo';
import { createToneInfoFromDiscriminatorValue, serializeToneInfo, type ToneInfo } from './toneInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface Call extends Entity, Parsable {
    /**
     * The audioRoutingGroups property
     */
    audioRoutingGroups?: AudioRoutingGroup[];
    /**
     * The callback URL on which callbacks will be delivered. Must be https.
     */
    callbackUri?: string;
    /**
     * A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     */
    callChainId?: string;
    /**
     * Contains the optional features for the call.
     */
    callOptions?: CallOptions;
    /**
     * The routing information on how the call was retargeted. Read-only.
     */
    callRoutes?: CallRoute[];
    /**
     * The chat information. Required information for joining a meeting.
     */
    chatInfo?: ChatInfo;
    /**
     * The contentSharingSessions property
     */
    contentSharingSessions?: ContentSharingSession[];
    /**
     * The direction of the call. The possible values are incoming or outgoing. Read-only.
     */
    direction?: CallDirection;
    /**
     * Call context associated with an incoming call.
     */
    incomingContext?: IncomingContext;
    /**
     * The media configuration. Required.
     */
    mediaConfig?: MediaConfig;
    /**
     * Read-only. The call media state.
     */
    mediaState?: CallMediaState;
    /**
     * The meeting information. Required information for meeting scenarios.
     */
    meetingInfo?: MeetingInfo;
    /**
     * The myParticipantId property
     */
    myParticipantId?: string;
    /**
     * The operations property
     */
    operations?: CommsOperation[];
    /**
     * The participants property
     */
    participants?: Participant[];
    /**
     * The list of requested modalities. Possible values are: unknown, audio, video, videoBasedScreenSharing, data.
     */
    requestedModalities?: Modality[];
    /**
     * The result information. For example, the result can hold termination reason. Read-only.
     */
    resultInfo?: ResultInfo;
    /**
     * The originator of the call.
     */
    source?: ParticipantInfo;
    /**
     * The call state. Possible values are: incoming, establishing, ringing, established, hold, transferring, transferAccepted, redirecting, terminating, terminated. Read-only.
     */
    state?: CallState;
    /**
     * The subject of the conversation.
     */
    subject?: string;
    /**
     * The targets of the call. Required information for creating peer to peer call.
     */
    targets?: InvitationParticipantInfo[];
    /**
     * The tenantId property
     */
    tenantId?: string;
    /**
     * The toneInfo property
     */
    toneInfo?: ToneInfo;
    /**
     * The transcription information for the call. Read-only.
     */
    transcription?: CallTranscriptionInfo;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function createCallFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCall;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
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
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function serializeCall(writer: SerializationWriter, call: Call | undefined = {} as Call) : void {
        serializeEntity(writer, call)
        writer.writeCollectionOfObjectValues<AudioRoutingGroup>("audioRoutingGroups", call.audioRoutingGroups, );
        writer.writeStringValue("callbackUri", call.callbackUri);
        writer.writeStringValue("callChainId", call.callChainId);
        writer.writeObjectValue<CallOptions>("callOptions", call.callOptions, );
        writer.writeCollectionOfObjectValues<CallRoute>("callRoutes", call.callRoutes, );
        writer.writeObjectValue<ChatInfo>("chatInfo", call.chatInfo, );
        writer.writeCollectionOfObjectValues<ContentSharingSession>("contentSharingSessions", call.contentSharingSessions, );
        writer.writeEnumValue<CallDirection>("direction", call.direction);
        writer.writeObjectValue<IncomingContext>("incomingContext", call.incomingContext, );
        writer.writeObjectValue<MediaConfig>("mediaConfig", call.mediaConfig, );
        writer.writeObjectValue<CallMediaState>("mediaState", call.mediaState, );
        writer.writeObjectValue<MeetingInfo>("meetingInfo", call.meetingInfo, );
        writer.writeStringValue("myParticipantId", call.myParticipantId);
        writer.writeCollectionOfObjectValues<CommsOperation>("operations", call.operations, );
        writer.writeCollectionOfObjectValues<Participant>("participants", call.participants, );
        if(call.requestedModalities)
        writer.writeEnumValue<Modality>("requestedModalities", ...call.requestedModalities);
        writer.writeObjectValue<ResultInfo>("resultInfo", call.resultInfo, );
        writer.writeObjectValue<ParticipantInfo>("source", call.source, );
        writer.writeEnumValue<CallState>("state", call.state);
        writer.writeStringValue("subject", call.subject);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("targets", call.targets, );
        writer.writeStringValue("tenantId", call.tenantId);
        writer.writeObjectValue<ToneInfo>("toneInfo", call.toneInfo, );
        writer.writeObjectValue<CallTranscriptionInfo>("transcription", call.transcription, );
}
