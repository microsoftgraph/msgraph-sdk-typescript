import {AudioRoutingGroup} from './audioRoutingGroup';
import {CallDirection} from './callDirection';
import {CallMediaState} from './callMediaState';
import {CallOptions} from './callOptions';
import {CallRoute} from './callRoute';
import {CallState} from './callState';
import {CallTranscriptionInfo} from './callTranscriptionInfo';
import {ChatInfo} from './chatInfo';
import {CommsOperation} from './commsOperation';
import {ContentSharingSession} from './contentSharingSession';
import {Entity} from './entity';
import {IncomingContext} from './incomingContext';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {MediaConfig} from './mediaConfig';
import {MeetingInfo} from './meetingInfo';
import {Modality} from './modality';
import {Participant} from './participant';
import {ParticipantInfo} from './participantInfo';
import {ResultInfo} from './resultInfo';
import {ToneInfo} from './toneInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Call extends Entity, Parsable {
    /**
     * The audioRoutingGroups property
     */
    audioRoutingGroups?: AudioRoutingGroup[] | undefined;
    /**
     * The callback URL on which callbacks will be delivered. Must be https.
     */
    callbackUri?: string | undefined;
    /**
     * A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     */
    callChainId?: string | undefined;
    /**
     * Contains the optional features for the call.
     */
    callOptions?: CallOptions | undefined;
    /**
     * The routing information on how the call was retargeted. Read-only.
     */
    callRoutes?: CallRoute[] | undefined;
    /**
     * The chat information. Required information for joining a meeting.
     */
    chatInfo?: ChatInfo | undefined;
    /**
     * The contentSharingSessions property
     */
    contentSharingSessions?: ContentSharingSession[] | undefined;
    /**
     * The direction of the call. The possible value are incoming or outgoing. Read-only.
     */
    direction?: CallDirection | undefined;
    /**
     * Call context associated with an incoming call.
     */
    incomingContext?: IncomingContext | undefined;
    /**
     * The media configuration. Required.
     */
    mediaConfig?: MediaConfig | undefined;
    /**
     * Read-only. The call media state.
     */
    mediaState?: CallMediaState | undefined;
    /**
     * The meeting information. Required information for meeting scenarios.
     */
    meetingInfo?: MeetingInfo | undefined;
    /**
     * The myParticipantId property
     */
    myParticipantId?: string | undefined;
    /**
     * The operations property
     */
    operations?: CommsOperation[] | undefined;
    /**
     * The participants property
     */
    participants?: Participant[] | undefined;
    /**
     * The list of requested modalities. Possible values are: unknown, audio, video, videoBasedScreenSharing, data.
     */
    requestedModalities?: Modality[] | undefined;
    /**
     * The result information. For example can hold termination reason. Read-only.
     */
    resultInfo?: ResultInfo | undefined;
    /**
     * The originator of the call.
     */
    source?: ParticipantInfo | undefined;
    /**
     * The call state. Possible values are: incoming, establishing, ringing, established, hold, transferring, transferAccepted, redirecting, terminating, terminated. Read-only.
     */
    state?: CallState | undefined;
    /**
     * The subject of the conversation.
     */
    subject?: string | undefined;
    /**
     * The targets of the call. Required information for creating peer to peer call.
     */
    targets?: InvitationParticipantInfo[] | undefined;
    /**
     * The tenantId property
     */
    tenantId?: string | undefined;
    /**
     * The toneInfo property
     */
    toneInfo?: ToneInfo | undefined;
    /**
     * The transcription information for the call. Read-only.
     */
    transcription?: CallTranscriptionInfo | undefined;
}
