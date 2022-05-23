import {AudioRoutingGroup} from './audioRoutingGroup';
import {CallDirection} from './callDirection';
import {CallMediaState} from './callMediaState';
import {CallOptions} from './callOptions';
import {CallRoute} from './callRoute';
import {CallState} from './callState';
import {CallTranscriptionInfo} from './callTranscriptionInfo';
import {ChatInfo} from './chatInfo';
import {CommsOperation} from './commsOperation';
import {Entity} from './entity';
import {IncomingContext} from './incomingContext';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {MediaConfig} from './mediaConfig';
import {MeetingInfo} from './meetingInfo';
import {Participant} from './participant';
import {ParticipantInfo} from './participantInfo';
import {ResultInfo} from './resultInfo';
import {ToneInfo} from './toneInfo';

export interface Call extends Entity{
    /** Read-only. Nullable. */
    audioRoutingGroups?:AudioRoutingGroup[] | undefined;
    /** The callback URL on which callbacks will be delivered. Must be https. */
    callbackUri?:string | undefined;
    /** A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    callChainId?:string | undefined;
    /** Contains the optional features for the call. */
    callOptions?:CallOptions | undefined;
    /** The routing information on how the call was retargeted. Read-only. */
    callRoutes?:CallRoute[] | undefined;
    /** The chat information. Required information for meeting scenarios. */
    chatInfo?:ChatInfo | undefined;
    /** The direction of the call. The possible value are incoming or outgoing. Read-only. */
    direction?:CallDirection | undefined;
    /** The context associated with an incoming call. Read-only. Server generated. */
    incomingContext?:IncomingContext | undefined;
    /** The media configuration. Required information for creating peer to peer calls or joining meetings. */
    mediaConfig?:MediaConfig | undefined;
    /** Read-only. The call media state. */
    mediaState?:CallMediaState | undefined;
    /** The meeting information. Required information for meeting scenarios. */
    meetingInfo?:MeetingInfo | undefined;
    /** The myParticipantId property */
    myParticipantId?:string | undefined;
    /** Read-only. Nullable. */
    operations?:CommsOperation[] | undefined;
    /** Read-only. Nullable. */
    participants?:Participant[] | undefined;
    /** The requestedModalities property */
    requestedModalities?:string[] | undefined;
    /** The resultInfo property */
    resultInfo?:ResultInfo | undefined;
    /** The source property */
    source?:ParticipantInfo | undefined;
    /** The state property */
    state?:CallState | undefined;
    /** The subject property */
    subject?:string | undefined;
    /** The targets property */
    targets?:InvitationParticipantInfo[] | undefined;
    /** The tenantId property */
    tenantId?:string | undefined;
    /** The toneInfo property */
    toneInfo?:ToneInfo | undefined;
    /** The transcription information for the call. Read-only. */
    transcription?:CallTranscriptionInfo | undefined;
}
