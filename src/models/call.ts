import {CallDirection} from './callDirection';
import {CallState} from './callState';
import {createAudioRoutingGroupFromDiscriminatorValue} from './createAudioRoutingGroupFromDiscriminatorValue';
import {createCommsOperationFromDiscriminatorValue} from './createCommsOperationFromDiscriminatorValue';
import {createParticipantFromDiscriminatorValue} from './createParticipantFromDiscriminatorValue';
import {AudioRoutingGroup, CallMediaState, CallOptions, CallRoute, CallTranscriptionInfo, ChatInfo, CommsOperation, CommunicationsMember1, Entity, IncomingContext, InvitationParticipantInfo, MediaConfig, MeetingInfo, Participant, ParticipantInfo, ResultInfo, ToneInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class Call extends Entity implements Parsable {
    /** The audioRoutingGroups property */
    private _audioRoutingGroups?: AudioRoutingGroup[] | undefined;
    /** The callback URL on which callbacks will be delivered. Must be https. */
    private _callbackUri?: string | undefined;
    /** A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a P2P call.  This needs to be copied over from Microsoft.Graph.Call.CallChainId. */
    private _callChainId?: string | undefined;
    /** Contains the optional features for the call. */
    private _callOptions?: CallOptions | CommunicationsMember1 | undefined;
    /** The routing information on how the call was retargeted. Read-only. */
    private _callRoutes?: CallRoute | CommunicationsMember1[] | undefined;
    /** The chat information. Required information for meeting scenarios. */
    private _chatInfo?: ChatInfo | CommunicationsMember1 | undefined;
    /** The direction of the call. The possible value are incoming or outgoing. Read-only. */
    private _direction?: CallDirection | CommunicationsMember1 | undefined;
    /** The context associated with an incoming call. Read-only. Server generated. */
    private _incomingContext?: IncomingContext | CommunicationsMember1 | undefined;
    /** The media configuration. Required information for creating peer to peer calls or joining meetings. */
    private _mediaConfig?: MediaConfig | CommunicationsMember1 | undefined;
    /** Read-only. The call media state. */
    private _mediaState?: CallMediaState | CommunicationsMember1 | undefined;
    /** The meeting information. Required information for meeting scenarios. */
    private _meetingInfo?: MeetingInfo | CommunicationsMember1 | undefined;
    /** The myParticipantId property */
    private _myParticipantId?: string | undefined;
    /** The operations property */
    private _operations?: CommsOperation[] | undefined;
    /** The participants property */
    private _participants?: Participant[] | undefined;
    /** The requestedModalities property */
    private _requestedModalities?: string[] | undefined;
    /** The resultInfo property */
    private _resultInfo?: ResultInfo | CommunicationsMember1 | undefined;
    /** The source property */
    private _source?: ParticipantInfo | CommunicationsMember1 | undefined;
    /** The state property */
    private _state?: CallState | CommunicationsMember1 | undefined;
    /** The subject property */
    private _subject?: string | undefined;
    /** The targets property */
    private _targets?: InvitationParticipantInfo | CommunicationsMember1[] | undefined;
    /** The tenantId property */
    private _tenantId?: string | undefined;
    /** The toneInfo property */
    private _toneInfo?: ToneInfo | CommunicationsMember1 | undefined;
    /** The transcription information for the call. Read-only. */
    private _transcription?: CallTranscriptionInfo | CommunicationsMember1 | undefined;
    /**
     * Gets the audioRoutingGroups property value. The audioRoutingGroups property
     * @returns a audioRoutingGroup
     */
    public get audioRoutingGroups() {
        return this._audioRoutingGroups;
    };
    /**
     * Sets the audioRoutingGroups property value. The audioRoutingGroups property
     * @param value Value to set for the audioRoutingGroups property.
     */
    public set audioRoutingGroups(value: AudioRoutingGroup[] | undefined) {
        this._audioRoutingGroups = value;
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
        this._callbackUri = value;
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
        this._callChainId = value;
    };
    /**
     * Gets the callOptions property value. Contains the optional features for the call.
     * @returns a communications
     */
    public get callOptions() {
        return this._callOptions;
    };
    /**
     * Sets the callOptions property value. Contains the optional features for the call.
     * @param value Value to set for the callOptions property.
     */
    public set callOptions(value: CallOptions | CommunicationsMember1 | undefined) {
        this._callOptions = value;
    };
    /**
     * Gets the callRoutes property value. The routing information on how the call was retargeted. Read-only.
     * @returns a communications
     */
    public get callRoutes() {
        return this._callRoutes;
    };
    /**
     * Sets the callRoutes property value. The routing information on how the call was retargeted. Read-only.
     * @param value Value to set for the callRoutes property.
     */
    public set callRoutes(value: CallRoute | CommunicationsMember1[] | undefined) {
        this._callRoutes = value;
    };
    /**
     * Gets the chatInfo property value. The chat information. Required information for meeting scenarios.
     * @returns a communications
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Sets the chatInfo property value. The chat information. Required information for meeting scenarios.
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | CommunicationsMember1 | undefined) {
        this._chatInfo = value;
    };
    /**
     * Instantiates a new call and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the direction property value. The direction of the call. The possible value are incoming or outgoing. Read-only.
     * @returns a communications
     */
    public get direction() {
        return this._direction;
    };
    /**
     * Sets the direction property value. The direction of the call. The possible value are incoming or outgoing. Read-only.
     * @param value Value to set for the direction property.
     */
    public set direction(value: CallDirection | CommunicationsMember1 | undefined) {
        this._direction = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "audioRoutingGroups": n => { this.audioRoutingGroups = n.getCollectionOfObjectValues<AudioRoutingGroup>(createAudioRoutingGroupFromDiscriminatorValue); },
            "callbackUri": n => { this.callbackUri = n.getStringValue(); },
            "callChainId": n => { this.callChainId = n.getStringValue(); },
            "callOptions": n => { this.callOptions = n.getObjectValue<CallOptions>(createCallOptionsFromDiscriminatorValue); },
            "callRoutes": n => { this.callRoutes = n.getObjectValue<CallRoute>(createCallRouteFromDiscriminatorValue); },
            "chatInfo": n => { this.chatInfo = n.getObjectValue<ChatInfo>(createChatInfoFromDiscriminatorValue); },
            "direction": n => { this.direction = n.getObjectValue<CallDirection>(createCallDirectionFromDiscriminatorValue); },
            "incomingContext": n => { this.incomingContext = n.getObjectValue<IncomingContext>(createIncomingContextFromDiscriminatorValue); },
            "mediaConfig": n => { this.mediaConfig = n.getObjectValue<MediaConfig>(createMediaConfigFromDiscriminatorValue); },
            "mediaState": n => { this.mediaState = n.getObjectValue<CallMediaState>(createCallMediaStateFromDiscriminatorValue); },
            "meetingInfo": n => { this.meetingInfo = n.getObjectValue<MeetingInfo>(createMeetingInfoFromDiscriminatorValue); },
            "myParticipantId": n => { this.myParticipantId = n.getStringValue(); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<CommsOperation>(createCommsOperationFromDiscriminatorValue); },
            "participants": n => { this.participants = n.getCollectionOfObjectValues<Participant>(createParticipantFromDiscriminatorValue); },
            "requestedModalities": n => { this.requestedModalities = n.getCollectionOfPrimitiveValues<string>(); },
            "resultInfo": n => { this.resultInfo = n.getObjectValue<ResultInfo>(createResultInfoFromDiscriminatorValue); },
            "source": n => { this.source = n.getObjectValue<ParticipantInfo>(createParticipantInfoFromDiscriminatorValue); },
            "state": n => { this.state = n.getObjectValue<CallState>(createCallStateFromDiscriminatorValue); },
            "subject": n => { this.subject = n.getStringValue(); },
            "targets": n => { this.targets = n.getObjectValue<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "toneInfo": n => { this.toneInfo = n.getObjectValue<ToneInfo>(createToneInfoFromDiscriminatorValue); },
            "transcription": n => { this.transcription = n.getObjectValue<CallTranscriptionInfo>(createCallTranscriptionInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the incomingContext property value. The context associated with an incoming call. Read-only. Server generated.
     * @returns a communications
     */
    public get incomingContext() {
        return this._incomingContext;
    };
    /**
     * Sets the incomingContext property value. The context associated with an incoming call. Read-only. Server generated.
     * @param value Value to set for the incomingContext property.
     */
    public set incomingContext(value: IncomingContext | CommunicationsMember1 | undefined) {
        this._incomingContext = value;
    };
    /**
     * Gets the mediaConfig property value. The media configuration. Required information for creating peer to peer calls or joining meetings.
     * @returns a communications
     */
    public get mediaConfig() {
        return this._mediaConfig;
    };
    /**
     * Sets the mediaConfig property value. The media configuration. Required information for creating peer to peer calls or joining meetings.
     * @param value Value to set for the mediaConfig property.
     */
    public set mediaConfig(value: MediaConfig | CommunicationsMember1 | undefined) {
        this._mediaConfig = value;
    };
    /**
     * Gets the mediaState property value. Read-only. The call media state.
     * @returns a communications
     */
    public get mediaState() {
        return this._mediaState;
    };
    /**
     * Sets the mediaState property value. Read-only. The call media state.
     * @param value Value to set for the mediaState property.
     */
    public set mediaState(value: CallMediaState | CommunicationsMember1 | undefined) {
        this._mediaState = value;
    };
    /**
     * Gets the meetingInfo property value. The meeting information. Required information for meeting scenarios.
     * @returns a communications
     */
    public get meetingInfo() {
        return this._meetingInfo;
    };
    /**
     * Sets the meetingInfo property value. The meeting information. Required information for meeting scenarios.
     * @param value Value to set for the meetingInfo property.
     */
    public set meetingInfo(value: MeetingInfo | CommunicationsMember1 | undefined) {
        this._meetingInfo = value;
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
        this._myParticipantId = value;
    };
    /**
     * Gets the operations property value. The operations property
     * @returns a commsOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The operations property
     * @param value Value to set for the operations property.
     */
    public set operations(value: CommsOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the participants property value. The participants property
     * @returns a participant
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants property
     * @param value Value to set for the participants property.
     */
    public set participants(value: Participant[] | undefined) {
        this._participants = value;
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
        this._requestedModalities = value;
    };
    /**
     * Gets the resultInfo property value. The resultInfo property
     * @returns a communications
     */
    public get resultInfo() {
        return this._resultInfo;
    };
    /**
     * Sets the resultInfo property value. The resultInfo property
     * @param value Value to set for the resultInfo property.
     */
    public set resultInfo(value: ResultInfo | CommunicationsMember1 | undefined) {
        this._resultInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AudioRoutingGroup>("audioRoutingGroups", this.audioRoutingGroups);
        writer.writeStringValue("callbackUri", this.callbackUri);
        writer.writeStringValue("callChainId", this.callChainId);
        writer.writeObjectValue<CallOptions>("callOptions", this.callOptions);
        writer.writeObjectValue<CallRoute>("callRoutes", this.callRoutes);
        writer.writeObjectValue<ChatInfo>("chatInfo", this.chatInfo);
        writer.writeObjectValue<CallDirection>("direction", this.direction);
        writer.writeObjectValue<IncomingContext>("incomingContext", this.incomingContext);
        writer.writeObjectValue<MediaConfig>("mediaConfig", this.mediaConfig);
        writer.writeObjectValue<CallMediaState>("mediaState", this.mediaState);
        writer.writeObjectValue<MeetingInfo>("meetingInfo", this.meetingInfo);
        writer.writeStringValue("myParticipantId", this.myParticipantId);
        writer.writeCollectionOfObjectValues<CommsOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<Participant>("participants", this.participants);
        writer.writeCollectionOfPrimitiveValues<string>("requestedModalities", this.requestedModalities);
        writer.writeObjectValue<ResultInfo>("resultInfo", this.resultInfo);
        writer.writeObjectValue<ParticipantInfo>("source", this.source);
        writer.writeObjectValue<CallState>("state", this.state);
        writer.writeStringValue("subject", this.subject);
        writer.writeObjectValue<InvitationParticipantInfo>("targets", this.targets);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeObjectValue<ToneInfo>("toneInfo", this.toneInfo);
        writer.writeObjectValue<CallTranscriptionInfo>("transcription", this.transcription);
    };
    /**
     * Gets the source property value. The source property
     * @returns a communications
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source property
     * @param value Value to set for the source property.
     */
    public set source(value: ParticipantInfo | CommunicationsMember1 | undefined) {
        this._source = value;
    };
    /**
     * Gets the state property value. The state property
     * @returns a communications
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: CallState | CommunicationsMember1 | undefined) {
        this._state = value;
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
        this._subject = value;
    };
    /**
     * Gets the targets property value. The targets property
     * @returns a communications
     */
    public get targets() {
        return this._targets;
    };
    /**
     * Sets the targets property value. The targets property
     * @param value Value to set for the targets property.
     */
    public set targets(value: InvitationParticipantInfo | CommunicationsMember1[] | undefined) {
        this._targets = value;
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
        this._tenantId = value;
    };
    /**
     * Gets the toneInfo property value. The toneInfo property
     * @returns a communications
     */
    public get toneInfo() {
        return this._toneInfo;
    };
    /**
     * Sets the toneInfo property value. The toneInfo property
     * @param value Value to set for the toneInfo property.
     */
    public set toneInfo(value: ToneInfo | CommunicationsMember1 | undefined) {
        this._toneInfo = value;
    };
    /**
     * Gets the transcription property value. The transcription information for the call. Read-only.
     * @returns a communications
     */
    public get transcription() {
        return this._transcription;
    };
    /**
     * Sets the transcription property value. The transcription information for the call. Read-only.
     * @param value Value to set for the transcription property.
     */
    public set transcription(value: CallTranscriptionInfo | CommunicationsMember1 | undefined) {
        this._transcription = value;
    };
}
