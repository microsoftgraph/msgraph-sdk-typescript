import {AudioRoutingGroup} from './audioRoutingGroup';
import {Call} from './call';
import {CallDirection} from './callDirection';
import {CallMediaState} from './callMediaState';
import {CallOptions} from './callOptions';
import {CallRoute} from './callRoute';
import {CallState} from './callState';
import {CallTranscriptionInfo} from './callTranscriptionInfo';
import {ChatInfo} from './chatInfo';
import {CommsOperation} from './commsOperation';
import {createAudioRoutingGroupFromDiscriminatorValue} from './createAudioRoutingGroupFromDiscriminatorValue';
import {createCallMediaStateFromDiscriminatorValue} from './createCallMediaStateFromDiscriminatorValue';
import {createCallOptionsFromDiscriminatorValue} from './createCallOptionsFromDiscriminatorValue';
import {createCallRouteFromDiscriminatorValue} from './createCallRouteFromDiscriminatorValue';
import {createCallTranscriptionInfoFromDiscriminatorValue} from './createCallTranscriptionInfoFromDiscriminatorValue';
import {createChatInfoFromDiscriminatorValue} from './createChatInfoFromDiscriminatorValue';
import {createCommsOperationFromDiscriminatorValue} from './createCommsOperationFromDiscriminatorValue';
import {createIncomingContextFromDiscriminatorValue} from './createIncomingContextFromDiscriminatorValue';
import {createInvitationParticipantInfoFromDiscriminatorValue} from './createInvitationParticipantInfoFromDiscriminatorValue';
import {createMediaConfigFromDiscriminatorValue} from './createMediaConfigFromDiscriminatorValue';
import {createMeetingInfoFromDiscriminatorValue} from './createMeetingInfoFromDiscriminatorValue';
import {createParticipantFromDiscriminatorValue} from './createParticipantFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from './createParticipantInfoFromDiscriminatorValue';
import {createResultInfoFromDiscriminatorValue} from './createResultInfoFromDiscriminatorValue';
import {createToneInfoFromDiscriminatorValue} from './createToneInfoFromDiscriminatorValue';
import {IncomingContext} from './incomingContext';
import {AudioRoutingGroupImpl, CallMediaStateImpl, CallOptionsImpl, CallRouteImpl, CallTranscriptionInfoImpl, ChatInfoImpl, CommsOperationImpl, EntityImpl, IncomingContextImpl, InvitationParticipantInfoImpl, MediaConfigImpl, MeetingInfoImpl, ParticipantImpl, ParticipantInfoImpl, ResultInfoImpl, ToneInfoImpl} from './index';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {MediaConfig} from './mediaConfig';
import {MeetingInfo} from './meetingInfo';
import {Modality} from './modality';
import {Participant} from './participant';
import {ParticipantInfo} from './participantInfo';
import {ResultInfo} from './resultInfo';
import {ToneInfo} from './toneInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallImpl extends EntityImpl implements Call, Parsable {
    /** Read-only. Nullable. */
    audioRoutingGroups?: AudioRoutingGroup[] | undefined;
    /** The callback URL on which callbacks will be delivered. Must be https. */
    callbackUri?: string | undefined;
    /** A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    callChainId?: string | undefined;
    /** Contains the optional features for the call. */
    callOptions?: CallOptions | undefined;
    /** The routing information on how the call was retargeted. Read-only. */
    callRoutes?: CallRoute[] | undefined;
    /** The chat information. Required information for meeting scenarios. */
    chatInfo?: ChatInfo | undefined;
    /** The direction of the call. The possible value are incoming or outgoing. Read-only. */
    direction?: CallDirection | undefined;
    /** The context associated with an incoming call. Read-only. Server generated. */
    incomingContext?: IncomingContext | undefined;
    /** The media configuration. Required information for creating peer to peer calls or joining meetings. */
    mediaConfig?: MediaConfig | undefined;
    /** Read-only. The call media state. */
    mediaState?: CallMediaState | undefined;
    /** The meeting information. Required information for meeting scenarios. */
    meetingInfo?: MeetingInfo | undefined;
    /** The myParticipantId property */
    myParticipantId?: string | undefined;
    /** Read-only. Nullable. */
    operations?: CommsOperation[] | undefined;
    /** Read-only. Nullable. */
    participants?: Participant[] | undefined;
    /** The requestedModalities property */
    requestedModalities?: Modality[] | undefined;
    /** The resultInfo property */
    resultInfo?: ResultInfo | undefined;
    /** The source property */
    source?: ParticipantInfo | undefined;
    /** The state property */
    state?: CallState | undefined;
    /** The subject property */
    subject?: string | undefined;
    /** The targets property */
    targets?: InvitationParticipantInfo[] | undefined;
    /** The tenantId property */
    tenantId?: string | undefined;
    /** The toneInfo property */
    toneInfo?: ToneInfo | undefined;
    /** The transcription information for the call. Read-only. */
    transcription?: CallTranscriptionInfo | undefined;
    /**
     * Instantiates a new call and sets the default values.
     * @param callParameterValue 
     */
    public constructor(callParameterValue?: Call | undefined) {
        super();
        this.audioRoutingGroups = callParameterValue?.audioRoutingGroups ;
        this.callbackUri = callParameterValue?.callbackUri ;
        this.callChainId = callParameterValue?.callChainId ;
        this.callOptions = callParameterValue?.callOptions ;
        this.callRoutes = callParameterValue?.callRoutes ;
        this.chatInfo = callParameterValue?.chatInfo ;
        this.direction = callParameterValue?.direction ;
        this.incomingContext = callParameterValue?.incomingContext ;
        this.mediaConfig = callParameterValue?.mediaConfig ;
        this.mediaState = callParameterValue?.mediaState ;
        this.meetingInfo = callParameterValue?.meetingInfo ;
        this.myParticipantId = callParameterValue?.myParticipantId ;
        this.operations = callParameterValue?.operations ;
        this.participants = callParameterValue?.participants ;
        this.requestedModalities = callParameterValue?.requestedModalities ;
        this.resultInfo = callParameterValue?.resultInfo ;
        this.source = callParameterValue?.source ;
        this.state = callParameterValue?.state ;
        this.subject = callParameterValue?.subject ;
        this.targets = callParameterValue?.targets ;
        this.tenantId = callParameterValue?.tenantId ;
        this.toneInfo = callParameterValue?.toneInfo ;
        this.transcription = callParameterValue?.transcription ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "audioRoutingGroups": n => { this.audioRoutingGroups = n.getCollectionOfObjectValues<AudioRoutingGroupImpl>(createAudioRoutingGroupFromDiscriminatorValue); },
            "callbackUri": n => { this.callbackUri = n.getStringValue(); },
            "callChainId": n => { this.callChainId = n.getStringValue(); },
            "callOptions": n => { this.callOptions = n.getObjectValue<CallOptionsImpl>(createCallOptionsFromDiscriminatorValue); },
            "callRoutes": n => { this.callRoutes = n.getCollectionOfObjectValues<CallRouteImpl>(createCallRouteFromDiscriminatorValue); },
            "chatInfo": n => { this.chatInfo = n.getObjectValue<ChatInfoImpl>(createChatInfoFromDiscriminatorValue); },
            "direction": n => { this.direction = n.getEnumValue<CallDirection>(CallDirection); },
            "incomingContext": n => { this.incomingContext = n.getObjectValue<IncomingContextImpl>(createIncomingContextFromDiscriminatorValue); },
            "mediaConfig": n => { this.mediaConfig = n.getObjectValue<MediaConfigImpl>(createMediaConfigFromDiscriminatorValue); },
            "mediaState": n => { this.mediaState = n.getObjectValue<CallMediaStateImpl>(createCallMediaStateFromDiscriminatorValue); },
            "meetingInfo": n => { this.meetingInfo = n.getObjectValue<MeetingInfoImpl>(createMeetingInfoFromDiscriminatorValue); },
            "myParticipantId": n => { this.myParticipantId = n.getStringValue(); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<CommsOperationImpl>(createCommsOperationFromDiscriminatorValue); },
            "participants": n => { this.participants = n.getCollectionOfObjectValues<ParticipantImpl>(createParticipantFromDiscriminatorValue); },
            "requestedModalities": n => { this.requestedModalities = n.getEnumValues<Modality>(Modality); },
            "resultInfo": n => { this.resultInfo = n.getObjectValue<ResultInfoImpl>(createResultInfoFromDiscriminatorValue); },
            "source": n => { this.source = n.getObjectValue<ParticipantInfoImpl>(createParticipantInfoFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<CallState>(CallState); },
            "subject": n => { this.subject = n.getStringValue(); },
            "targets": n => { this.targets = n.getCollectionOfObjectValues<InvitationParticipantInfoImpl>(createInvitationParticipantInfoFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "toneInfo": n => { this.toneInfo = n.getObjectValue<ToneInfoImpl>(createToneInfoFromDiscriminatorValue); },
            "transcription": n => { this.transcription = n.getObjectValue<CallTranscriptionInfoImpl>(createCallTranscriptionInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.audioRoutingGroups){
        const audioRoutingGroupsArrValue: AudioRoutingGroupImpl[] = []; this.audioRoutingGroups?.forEach(element => {audioRoutingGroupsArrValue.push(new AudioRoutingGroupImpl(element));});
        writer.writeCollectionOfObjectValues<AudioRoutingGroupImpl>("audioRoutingGroups", audioRoutingGroupsArrValue);
        }
        if(this.callbackUri){
        if(this.callbackUri)
        writer.writeStringValue("callbackUri", this.callbackUri);
        }
        if(this.callChainId){
        if(this.callChainId)
        writer.writeStringValue("callChainId", this.callChainId);
        }
        if(this.callOptions){
        if(this.callOptions)
        writer.writeObjectValue<CallOptionsImpl>("callOptions", new CallOptionsImpl(this.callOptions));
        }
        if(this.callRoutes){
        const callRoutesArrValue: CallRouteImpl[] = []; this.callRoutes?.forEach(element => {callRoutesArrValue.push(new CallRouteImpl(element));});
        writer.writeCollectionOfObjectValues<CallRouteImpl>("callRoutes", callRoutesArrValue);
        }
        if(this.chatInfo){
        if(this.chatInfo)
        writer.writeObjectValue<ChatInfoImpl>("chatInfo", new ChatInfoImpl(this.chatInfo));
        }
        if(this.direction){
        if(this.direction)
        writer.writeEnumValue<CallDirection>("direction", this.direction);
        }
        if(this.incomingContext){
        if(this.incomingContext)
        writer.writeObjectValue<IncomingContextImpl>("incomingContext", new IncomingContextImpl(this.incomingContext));
        }
        if(this.mediaConfig){
        if(this.mediaConfig)
        writer.writeObjectValue<MediaConfigImpl>("mediaConfig", new MediaConfigImpl(this.mediaConfig));
        }
        if(this.mediaState){
        if(this.mediaState)
        writer.writeObjectValue<CallMediaStateImpl>("mediaState", new CallMediaStateImpl(this.mediaState));
        }
        if(this.meetingInfo){
        if(this.meetingInfo)
        writer.writeObjectValue<MeetingInfoImpl>("meetingInfo", new MeetingInfoImpl(this.meetingInfo));
        }
        if(this.myParticipantId){
        if(this.myParticipantId)
        writer.writeStringValue("myParticipantId", this.myParticipantId);
        }
        if(this.operations){
        const operationsArrValue: CommsOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new CommsOperationImpl(element));});
        writer.writeCollectionOfObjectValues<CommsOperationImpl>("operations", operationsArrValue);
        }
        if(this.participants){
        const participantsArrValue: ParticipantImpl[] = []; this.participants?.forEach(element => {participantsArrValue.push(new ParticipantImpl(element));});
        writer.writeCollectionOfObjectValues<ParticipantImpl>("participants", participantsArrValue);
        }
        if(this.requestedModalities){
        if(this.requestedModalities)
        this.requestedModalities && writer.writeEnumValue<Modality>("requestedModalities", ...this.requestedModalities);
        }
        if(this.resultInfo){
        if(this.resultInfo)
        writer.writeObjectValue<ResultInfoImpl>("resultInfo", new ResultInfoImpl(this.resultInfo));
        }
        if(this.source){
        if(this.source)
        writer.writeObjectValue<ParticipantInfoImpl>("source", new ParticipantInfoImpl(this.source));
        }
        if(this.state){
        if(this.state)
        writer.writeEnumValue<CallState>("state", this.state);
        }
        if(this.subject){
        if(this.subject)
        writer.writeStringValue("subject", this.subject);
        }
        if(this.targets){
        const targetsArrValue: InvitationParticipantInfoImpl[] = []; this.targets?.forEach(element => {targetsArrValue.push(new InvitationParticipantInfoImpl(element));});
        writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("targets", targetsArrValue);
        }
        if(this.tenantId){
        if(this.tenantId)
        writer.writeStringValue("tenantId", this.tenantId);
        }
        if(this.toneInfo){
        if(this.toneInfo)
        writer.writeObjectValue<ToneInfoImpl>("toneInfo", new ToneInfoImpl(this.toneInfo));
        }
        if(this.transcription){
        if(this.transcription)
        writer.writeObjectValue<CallTranscriptionInfoImpl>("transcription", new CallTranscriptionInfoImpl(this.transcription));
        }
    };
}
