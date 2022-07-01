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
import {Participant} from './participant';
import {ParticipantInfo} from './participantInfo';
import {ResultInfo} from './resultInfo';
import {ToneInfo} from './toneInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class CallImpl extends EntityImpl implements Call {
    /** The audioRoutingGroups property */
    private _audioRoutingGroups?: AudioRoutingGroup[] | undefined;
    /** The callback URL on which callbacks will be delivered. Must be https. */
    private _callbackUri?: string | undefined;
    /** A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    private _callChainId?: string | undefined;
    /** Contains the optional features for the call. */
    private _callOptions?: CallOptions | undefined;
    /** The routing information on how the call was retargeted. Read-only. */
    private _callRoutes?: CallRoute[] | undefined;
    /** The chat information. Required information for meeting scenarios. */
    private _chatInfo?: ChatInfo | undefined;
    /** The direction of the call. The possible value are incoming or outgoing. Read-only. */
    private _direction?: CallDirection | undefined;
    /** The context associated with an incoming call. Read-only. Server generated. */
    private _incomingContext?: IncomingContext | undefined;
    /** The media configuration. Required information for creating peer to peer calls or joining meetings. */
    private _mediaConfig?: MediaConfig | undefined;
    /** Read-only. The call media state. */
    private _mediaState?: CallMediaState | undefined;
    /** The meeting information. Required information for meeting scenarios. */
    private _meetingInfo?: MeetingInfo | undefined;
    /** The myParticipantId property */
    private _myParticipantId?: string | undefined;
    /** The operations property */
    private _operations?: CommsOperation[] | undefined;
    /** The participants property */
    private _participants?: Participant[] | undefined;
    /** The requestedModalities property */
    private _requestedModalities?: string[] | undefined;
    /** The resultInfo property */
    private _resultInfo?: ResultInfo | undefined;
    /** The source property */
    private _source?: ParticipantInfo | undefined;
    /** The state property */
    private _state?: CallState | undefined;
    /** The subject property */
    private _subject?: string | undefined;
    /** The targets property */
    private _targets?: InvitationParticipantInfo[] | undefined;
    /** The tenantId property */
    private _tenantId?: string | undefined;
    /** The toneInfo property */
    private _toneInfo?: ToneInfo | undefined;
    /** The transcription information for the call. Read-only. */
    private _transcription?: CallTranscriptionInfo | undefined;
    /**
     * Gets the audioRoutingGroups property value. The audioRoutingGroups property
     * @returns a AudioRoutingGroupInterface
     */
    public get audioRoutingGroups() {
        return this._audioRoutingGroups;
    };
    /**
     * Sets the audioRoutingGroups property value. The audioRoutingGroups property
     * @param value Value to set for the audioRoutingGroups property.
     */
    public set audioRoutingGroups(value: AudioRoutingGroup[] | undefined) {
        if(value) {
            const audioRoutingGroupsArrValue: AudioRoutingGroupImpl[] = [];
            this.audioRoutingGroups?.forEach(element => {
                audioRoutingGroupsArrValue.push((element instanceof AudioRoutingGroupImpl? element as AudioRoutingGroupImpl:new AudioRoutingGroupImpl(element)));
            });
            this._audioRoutingGroups = audioRoutingGroupsArrValue;
        }
    };
    /**
     * Gets the callbackUri property value. The callback URL on which callbacks will be delivered. Must be https.
     * @returns a string
     */
    public get callbackUri() {
        return this._callbackUri;
    };
    /**
     * Sets the callbackUri property value. The callback URL on which callbacks will be delivered. Must be https.
     * @param value Value to set for the callbackUri property.
     */
    public set callbackUri(value: string | undefined) {
        if(value) {
            this._callbackUri = value;
        }
    };
    /**
     * Gets the callChainId property value. A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     * @returns a string
     */
    public get callChainId() {
        return this._callChainId;
    };
    /**
     * Sets the callChainId property value. A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     * @param value Value to set for the callChainId property.
     */
    public set callChainId(value: string | undefined) {
        if(value) {
            this._callChainId = value;
        }
    };
    /**
     * Gets the callOptions property value. Contains the optional features for the call.
     * @returns a CallOptionsInterface
     */
    public get callOptions() {
        return this._callOptions;
    };
    /**
     * Sets the callOptions property value. Contains the optional features for the call.
     * @param value Value to set for the callOptions property.
     */
    public set callOptions(value: CallOptions | undefined) {
        if(value) {
            this._callOptions = value instanceof CallOptionsImpl? value as CallOptionsImpl: new CallOptionsImpl(value);
        }
    };
    /**
     * Gets the callRoutes property value. The routing information on how the call was retargeted. Read-only.
     * @returns a CallRouteInterface
     */
    public get callRoutes() {
        return this._callRoutes;
    };
    /**
     * Sets the callRoutes property value. The routing information on how the call was retargeted. Read-only.
     * @param value Value to set for the callRoutes property.
     */
    public set callRoutes(value: CallRoute[] | undefined) {
        if(value) {
            const callRoutesArrValue: CallRouteImpl[] = [];
            this.callRoutes?.forEach(element => {
                callRoutesArrValue.push((element instanceof CallRouteImpl? element as CallRouteImpl:new CallRouteImpl(element)));
            });
            this._callRoutes = callRoutesArrValue;
        }
    };
    /**
     * Gets the chatInfo property value. The chat information. Required information for meeting scenarios.
     * @returns a ChatInfoInterface
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Sets the chatInfo property value. The chat information. Required information for meeting scenarios.
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | undefined) {
        if(value) {
            this._chatInfo = value instanceof ChatInfoImpl? value as ChatInfoImpl: new ChatInfoImpl(value);
        }
    };
    /**
     * Instantiates a new call and sets the default values.
     * @param callParameterValue 
     */
    public constructor(callParameterValue?: Call | undefined) {
        super(callParameterValue);
        this._audioRoutingGroups = callParameterValue?.audioRoutingGroups;
        this._callbackUri = callParameterValue?.callbackUri;
        this._callChainId = callParameterValue?.callChainId;
        this._callOptions = callParameterValue?.callOptions;
        this._callRoutes = callParameterValue?.callRoutes;
        this._chatInfo = callParameterValue?.chatInfo;
        this._direction = callParameterValue?.direction;
        this._incomingContext = callParameterValue?.incomingContext;
        this._mediaConfig = callParameterValue?.mediaConfig;
        this._mediaState = callParameterValue?.mediaState;
        this._meetingInfo = callParameterValue?.meetingInfo;
        this._myParticipantId = callParameterValue?.myParticipantId;
        this._operations = callParameterValue?.operations;
        this._participants = callParameterValue?.participants;
        this._requestedModalities = callParameterValue?.requestedModalities;
        this._resultInfo = callParameterValue?.resultInfo;
        this._source = callParameterValue?.source;
        this._state = callParameterValue?.state;
        this._subject = callParameterValue?.subject;
        this._targets = callParameterValue?.targets;
        this._tenantId = callParameterValue?.tenantId;
        this._toneInfo = callParameterValue?.toneInfo;
        this._transcription = callParameterValue?.transcription;
    };
    /**
     * Gets the direction property value. The direction of the call. The possible value are incoming or outgoing. Read-only.
     * @returns a callDirection
     */
    public get direction() {
        return this._direction;
    };
    /**
     * Sets the direction property value. The direction of the call. The possible value are incoming or outgoing. Read-only.
     * @param value Value to set for the direction property.
     */
    public set direction(value: CallDirection | undefined) {
        if(value) {
            this._direction = value;
        }
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
            "requestedModalities": n => { this.requestedModalities = n.getCollectionOfPrimitiveValues<string>(); },
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
     * Gets the incomingContext property value. The context associated with an incoming call. Read-only. Server generated.
     * @returns a IncomingContextInterface
     */
    public get incomingContext() {
        return this._incomingContext;
    };
    /**
     * Sets the incomingContext property value. The context associated with an incoming call. Read-only. Server generated.
     * @param value Value to set for the incomingContext property.
     */
    public set incomingContext(value: IncomingContext | undefined) {
        if(value) {
            this._incomingContext = value instanceof IncomingContextImpl? value as IncomingContextImpl: new IncomingContextImpl(value);
        }
    };
    /**
     * Gets the mediaConfig property value. The media configuration. Required information for creating peer to peer calls or joining meetings.
     * @returns a MediaConfigInterface
     */
    public get mediaConfig() {
        return this._mediaConfig;
    };
    /**
     * Sets the mediaConfig property value. The media configuration. Required information for creating peer to peer calls or joining meetings.
     * @param value Value to set for the mediaConfig property.
     */
    public set mediaConfig(value: MediaConfig | undefined) {
        if(value) {
            this._mediaConfig = value instanceof MediaConfigImpl? value as MediaConfigImpl: new MediaConfigImpl(value);
        }
    };
    /**
     * Gets the mediaState property value. Read-only. The call media state.
     * @returns a CallMediaStateInterface
     */
    public get mediaState() {
        return this._mediaState;
    };
    /**
     * Sets the mediaState property value. Read-only. The call media state.
     * @param value Value to set for the mediaState property.
     */
    public set mediaState(value: CallMediaState | undefined) {
        if(value) {
            this._mediaState = value instanceof CallMediaStateImpl? value as CallMediaStateImpl: new CallMediaStateImpl(value);
        }
    };
    /**
     * Gets the meetingInfo property value. The meeting information. Required information for meeting scenarios.
     * @returns a MeetingInfoInterface
     */
    public get meetingInfo() {
        return this._meetingInfo;
    };
    /**
     * Sets the meetingInfo property value. The meeting information. Required information for meeting scenarios.
     * @param value Value to set for the meetingInfo property.
     */
    public set meetingInfo(value: MeetingInfo | undefined) {
        if(value) {
            this._meetingInfo = value instanceof MeetingInfoImpl? value as MeetingInfoImpl: new MeetingInfoImpl(value);
        }
    };
    /**
     * Gets the myParticipantId property value. The myParticipantId property
     * @returns a string
     */
    public get myParticipantId() {
        return this._myParticipantId;
    };
    /**
     * Sets the myParticipantId property value. The myParticipantId property
     * @param value Value to set for the myParticipantId property.
     */
    public set myParticipantId(value: string | undefined) {
        if(value) {
            this._myParticipantId = value;
        }
    };
    /**
     * Gets the operations property value. The operations property
     * @returns a CommsOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The operations property
     * @param value Value to set for the operations property.
     */
    public set operations(value: CommsOperation[] | undefined) {
        if(value) {
            const operationsArrValue: CommsOperationImpl[] = [];
            this.operations?.forEach(element => {
                operationsArrValue.push((element instanceof CommsOperationImpl? element as CommsOperationImpl:new CommsOperationImpl(element)));
            });
            this._operations = operationsArrValue;
        }
    };
    /**
     * Gets the participants property value. The participants property
     * @returns a ParticipantInterface
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants property
     * @param value Value to set for the participants property.
     */
    public set participants(value: Participant[] | undefined) {
        if(value) {
            const participantsArrValue: ParticipantImpl[] = [];
            this.participants?.forEach(element => {
                participantsArrValue.push((element instanceof ParticipantImpl? element as ParticipantImpl:new ParticipantImpl(element)));
            });
            this._participants = participantsArrValue;
        }
    };
    /**
     * Gets the requestedModalities property value. The requestedModalities property
     * @returns a string
     */
    public get requestedModalities() {
        return this._requestedModalities;
    };
    /**
     * Sets the requestedModalities property value. The requestedModalities property
     * @param value Value to set for the requestedModalities property.
     */
    public set requestedModalities(value: string[] | undefined) {
        if(value) {
            this._requestedModalities = value;
        }
    };
    /**
     * Gets the resultInfo property value. The resultInfo property
     * @returns a ResultInfoInterface
     */
    public get resultInfo() {
        return this._resultInfo;
    };
    /**
     * Sets the resultInfo property value. The resultInfo property
     * @param value Value to set for the resultInfo property.
     */
    public set resultInfo(value: ResultInfo | undefined) {
        if(value) {
            this._resultInfo = value instanceof ResultInfoImpl? value as ResultInfoImpl: new ResultInfoImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.audioRoutingGroups && this.audioRoutingGroups.length != 0){        const audioRoutingGroupsArrValue: AudioRoutingGroupImpl[] = [];
        this.audioRoutingGroups?.forEach(element => {
            audioRoutingGroupsArrValue.push((element instanceof AudioRoutingGroupImpl? element as AudioRoutingGroupImpl:new AudioRoutingGroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AudioRoutingGroupImpl>("audioRoutingGroups", audioRoutingGroupsArrValue);
        }
        if(this.callbackUri){
            writer.writeStringValue("callbackUri", this.callbackUri);
        }
        if(this.callChainId){
            writer.writeStringValue("callChainId", this.callChainId);
        }
        if(this.callOptions){
            writer.writeObjectValue<CallOptionsImpl>("callOptions", (this.callOptions instanceof CallOptionsImpl? this.callOptions as CallOptionsImpl: new CallOptionsImpl(this.callOptions)));
        }
        if(this.callRoutes && this.callRoutes.length != 0){        const callRoutesArrValue: CallRouteImpl[] = [];
        this.callRoutes?.forEach(element => {
            callRoutesArrValue.push((element instanceof CallRouteImpl? element as CallRouteImpl:new CallRouteImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CallRouteImpl>("callRoutes", callRoutesArrValue);
        }
        if(this.chatInfo){
            writer.writeObjectValue<ChatInfoImpl>("chatInfo", (this.chatInfo instanceof ChatInfoImpl? this.chatInfo as ChatInfoImpl: new ChatInfoImpl(this.chatInfo)));
        }
        if(this.direction){
            writer.writeEnumValue<CallDirection>("direction", this.direction);
        }
        if(this.incomingContext){
            writer.writeObjectValue<IncomingContextImpl>("incomingContext", (this.incomingContext instanceof IncomingContextImpl? this.incomingContext as IncomingContextImpl: new IncomingContextImpl(this.incomingContext)));
        }
        if(this.mediaConfig){
            writer.writeObjectValue<MediaConfigImpl>("mediaConfig", (this.mediaConfig instanceof MediaConfigImpl? this.mediaConfig as MediaConfigImpl: new MediaConfigImpl(this.mediaConfig)));
        }
        if(this.mediaState){
            writer.writeObjectValue<CallMediaStateImpl>("mediaState", (this.mediaState instanceof CallMediaStateImpl? this.mediaState as CallMediaStateImpl: new CallMediaStateImpl(this.mediaState)));
        }
        if(this.meetingInfo){
            writer.writeObjectValue<MeetingInfoImpl>("meetingInfo", (this.meetingInfo instanceof MeetingInfoImpl? this.meetingInfo as MeetingInfoImpl: new MeetingInfoImpl(this.meetingInfo)));
        }
        if(this.myParticipantId){
            writer.writeStringValue("myParticipantId", this.myParticipantId);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: CommsOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof CommsOperationImpl? element as CommsOperationImpl:new CommsOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<CommsOperationImpl>("operations", operationsArrValue);
        }
        if(this.participants && this.participants.length != 0){        const participantsArrValue: ParticipantImpl[] = [];
        this.participants?.forEach(element => {
            participantsArrValue.push((element instanceof ParticipantImpl? element as ParticipantImpl:new ParticipantImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ParticipantImpl>("participants", participantsArrValue);
        }
        if(this.requestedModalities){
            writer.writeCollectionOfPrimitiveValues<string>("requestedModalities", this.requestedModalities);
        }
        if(this.resultInfo){
            writer.writeObjectValue<ResultInfoImpl>("resultInfo", (this.resultInfo instanceof ResultInfoImpl? this.resultInfo as ResultInfoImpl: new ResultInfoImpl(this.resultInfo)));
        }
        if(this.source){
            writer.writeObjectValue<ParticipantInfoImpl>("source", (this.source instanceof ParticipantInfoImpl? this.source as ParticipantInfoImpl: new ParticipantInfoImpl(this.source)));
        }
        if(this.state){
            writer.writeEnumValue<CallState>("state", this.state);
        }
        if(this.subject){
            writer.writeStringValue("subject", this.subject);
        }
        if(this.targets && this.targets.length != 0){        const targetsArrValue: InvitationParticipantInfoImpl[] = [];
        this.targets?.forEach(element => {
            targetsArrValue.push((element instanceof InvitationParticipantInfoImpl? element as InvitationParticipantInfoImpl:new InvitationParticipantInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("targets", targetsArrValue);
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
        if(this.toneInfo){
            writer.writeObjectValue<ToneInfoImpl>("toneInfo", (this.toneInfo instanceof ToneInfoImpl? this.toneInfo as ToneInfoImpl: new ToneInfoImpl(this.toneInfo)));
        }
        if(this.transcription){
            writer.writeObjectValue<CallTranscriptionInfoImpl>("transcription", (this.transcription instanceof CallTranscriptionInfoImpl? this.transcription as CallTranscriptionInfoImpl: new CallTranscriptionInfoImpl(this.transcription)));
        }
    };
    /**
     * Gets the source property value. The source property
     * @returns a ParticipantInfoInterface
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source property
     * @param value Value to set for the source property.
     */
    public set source(value: ParticipantInfo | undefined) {
        if(value) {
            this._source = value instanceof ParticipantInfoImpl? value as ParticipantInfoImpl: new ParticipantInfoImpl(value);
        }
    };
    /**
     * Gets the state property value. The state property
     * @returns a callState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: CallState | undefined) {
        if(value) {
            this._state = value;
        }
    };
    /**
     * Gets the subject property value. The subject property
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject property
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        if(value) {
            this._subject = value;
        }
    };
    /**
     * Gets the targets property value. The targets property
     * @returns a InvitationParticipantInfoInterface
     */
    public get targets() {
        return this._targets;
    };
    /**
     * Sets the targets property value. The targets property
     * @param value Value to set for the targets property.
     */
    public set targets(value: InvitationParticipantInfo[] | undefined) {
        if(value) {
            const targetsArrValue: InvitationParticipantInfoImpl[] = [];
            this.targets?.forEach(element => {
                targetsArrValue.push((element instanceof InvitationParticipantInfoImpl? element as InvitationParticipantInfoImpl:new InvitationParticipantInfoImpl(element)));
            });
            this._targets = targetsArrValue;
        }
    };
    /**
     * Gets the tenantId property value. The tenantId property
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The tenantId property
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        if(value) {
            this._tenantId = value;
        }
    };
    /**
     * Gets the toneInfo property value. The toneInfo property
     * @returns a ToneInfoInterface
     */
    public get toneInfo() {
        return this._toneInfo;
    };
    /**
     * Sets the toneInfo property value. The toneInfo property
     * @param value Value to set for the toneInfo property.
     */
    public set toneInfo(value: ToneInfo | undefined) {
        if(value) {
            this._toneInfo = value instanceof ToneInfoImpl? value as ToneInfoImpl: new ToneInfoImpl(value);
        }
    };
    /**
     * Gets the transcription property value. The transcription information for the call. Read-only.
     * @returns a CallTranscriptionInfoInterface
     */
    public get transcription() {
        return this._transcription;
    };
    /**
     * Sets the transcription property value. The transcription information for the call. Read-only.
     * @param value Value to set for the transcription property.
     */
    public set transcription(value: CallTranscriptionInfo | undefined) {
        if(value) {
            this._transcription = value instanceof CallTranscriptionInfoImpl? value as CallTranscriptionInfoImpl: new CallTranscriptionInfoImpl(value);
        }
    };
}
