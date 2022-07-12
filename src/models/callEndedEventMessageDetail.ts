import {AdminMember1, CallParticipantInfo, EventMessageDetail, IdentitySet} from './index';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallEndedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Duration of the call. */
    private _callDuration?: Duration | undefined;
    /** Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue. */
    private _callEventType?: TeamworkCallEventType | AdminMember1 | undefined;
    /** Unique identifier of the call. */
    private _callId?: string | undefined;
    /** List of call participants. */
    private _callParticipants?: CallParticipantInfo | AdminMember1[] | undefined;
    /** Initiator of the event. */
    private _initiator?: IdentitySet | AdminMember1 | undefined;
    /**
     * Gets the callDuration property value. Duration of the call.
     * @returns a Duration
     */
    public get callDuration() {
        return this._callDuration;
    };
    /**
     * Sets the callDuration property value. Duration of the call.
     * @param value Value to set for the callDuration property.
     */
    public set callDuration(value: Duration | undefined) {
        this._callDuration = value;
    };
    /**
     * Gets the callEventType property value. Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue.
     * @returns a admin
     */
    public get callEventType() {
        return this._callEventType;
    };
    /**
     * Sets the callEventType property value. Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue.
     * @param value Value to set for the callEventType property.
     */
    public set callEventType(value: TeamworkCallEventType | AdminMember1 | undefined) {
        this._callEventType = value;
    };
    /**
     * Gets the callId property value. Unique identifier of the call.
     * @returns a string
     */
    public get callId() {
        return this._callId;
    };
    /**
     * Sets the callId property value. Unique identifier of the call.
     * @param value Value to set for the callId property.
     */
    public set callId(value: string | undefined) {
        this._callId = value;
    };
    /**
     * Gets the callParticipants property value. List of call participants.
     * @returns a admin
     */
    public get callParticipants() {
        return this._callParticipants;
    };
    /**
     * Sets the callParticipants property value. List of call participants.
     * @param value Value to set for the callParticipants property.
     */
    public set callParticipants(value: CallParticipantInfo | AdminMember1[] | undefined) {
        this._callParticipants = value;
    };
    /**
     * Instantiates a new CallEndedEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "callDuration": n => { this.callDuration = n.getDurationValue(); },
            "callEventType": n => { this.callEventType = n.getObjectValue<TeamworkCallEventType>(createTeamworkCallEventTypeFromDiscriminatorValue); },
            "callId": n => { this.callId = n.getStringValue(); },
            "callParticipants": n => { this.callParticipants = n.getObjectValue<CallParticipantInfo>(createCallParticipantInfoFromDiscriminatorValue); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a admin
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | AdminMember1 | undefined) {
        this._initiator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDurationValue("callDuration", this.callDuration);
        writer.writeObjectValue<TeamworkCallEventType>("callEventType", this.callEventType);
        writer.writeStringValue("callId", this.callId);
        writer.writeObjectValue<CallParticipantInfo>("callParticipants", this.callParticipants);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
    };
}
