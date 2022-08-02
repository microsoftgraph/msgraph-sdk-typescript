import {CallRecordingStatus} from './callRecordingStatus';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRecordingEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Unique identifier of the call. */
    private _callId?: string | undefined;
    /** Display name for the call recording. */
    private _callRecordingDisplayName?: string | undefined;
    /** Duration of the call recording. */
    private _callRecordingDuration?: Duration | undefined;
    /** Status of the call recording. Possible values are: success, failure, initial, chunkFinished, unknownFutureValue. */
    private _callRecordingStatus?: CallRecordingStatus | undefined;
    /** Call recording URL. */
    private _callRecordingUrl?: string | undefined;
    /** Initiator of the event. */
    private _initiator?: IdentitySet | undefined;
    /** Organizer of the meeting. */
    private _meetingOrganizer?: IdentitySet | undefined;
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
     * Gets the callRecordingDisplayName property value. Display name for the call recording.
     * @returns a string
     */
    public get callRecordingDisplayName() {
        return this._callRecordingDisplayName;
    };
    /**
     * Sets the callRecordingDisplayName property value. Display name for the call recording.
     * @param value Value to set for the callRecordingDisplayName property.
     */
    public set callRecordingDisplayName(value: string | undefined) {
        this._callRecordingDisplayName = value;
    };
    /**
     * Gets the callRecordingDuration property value. Duration of the call recording.
     * @returns a Duration
     */
    public get callRecordingDuration() {
        return this._callRecordingDuration;
    };
    /**
     * Sets the callRecordingDuration property value. Duration of the call recording.
     * @param value Value to set for the callRecordingDuration property.
     */
    public set callRecordingDuration(value: Duration | undefined) {
        this._callRecordingDuration = value;
    };
    /**
     * Gets the callRecordingStatus property value. Status of the call recording. Possible values are: success, failure, initial, chunkFinished, unknownFutureValue.
     * @returns a callRecordingStatus
     */
    public get callRecordingStatus() {
        return this._callRecordingStatus;
    };
    /**
     * Sets the callRecordingStatus property value. Status of the call recording. Possible values are: success, failure, initial, chunkFinished, unknownFutureValue.
     * @param value Value to set for the callRecordingStatus property.
     */
    public set callRecordingStatus(value: CallRecordingStatus | undefined) {
        this._callRecordingStatus = value;
    };
    /**
     * Gets the callRecordingUrl property value. Call recording URL.
     * @returns a string
     */
    public get callRecordingUrl() {
        return this._callRecordingUrl;
    };
    /**
     * Sets the callRecordingUrl property value. Call recording URL.
     * @param value Value to set for the callRecordingUrl property.
     */
    public set callRecordingUrl(value: string | undefined) {
        this._callRecordingUrl = value;
    };
    /**
     * Instantiates a new CallRecordingEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.callRecordingEventMessageDetail";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "callId": n => { this.callId = n.getStringValue(); },
            "callRecordingDisplayName": n => { this.callRecordingDisplayName = n.getStringValue(); },
            "callRecordingDuration": n => { this.callRecordingDuration = n.getDurationValue(); },
            "callRecordingStatus": n => { this.callRecordingStatus = n.getEnumValue<CallRecordingStatus>(CallRecordingStatus); },
            "callRecordingUrl": n => { this.callRecordingUrl = n.getStringValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "meetingOrganizer": n => { this.meetingOrganizer = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a identitySet
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | undefined) {
        this._initiator = value;
    };
    /**
     * Gets the meetingOrganizer property value. Organizer of the meeting.
     * @returns a identitySet
     */
    public get meetingOrganizer() {
        return this._meetingOrganizer;
    };
    /**
     * Sets the meetingOrganizer property value. Organizer of the meeting.
     * @param value Value to set for the meetingOrganizer property.
     */
    public set meetingOrganizer(value: IdentitySet | undefined) {
        this._meetingOrganizer = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("callId", this.callId);
        writer.writeStringValue("callRecordingDisplayName", this.callRecordingDisplayName);
        writer.writeDurationValue("callRecordingDuration", this.callRecordingDuration);
        writer.writeEnumValue<CallRecordingStatus>("callRecordingStatus", this.callRecordingStatus);
        writer.writeStringValue("callRecordingUrl", this.callRecordingUrl);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
        writer.writeObjectValue<IdentitySet>("meetingOrganizer", this.meetingOrganizer);
    };
}
