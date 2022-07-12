import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallTranscriptEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Unique identifier of the call. */
    private _callId?: string | undefined;
    /** Unique identifier for a call transcript. */
    private _callTranscriptICalUid?: string | undefined;
    /** The organizer of the meeting. */
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
     * Gets the callTranscriptICalUid property value. Unique identifier for a call transcript.
     * @returns a string
     */
    public get callTranscriptICalUid() {
        return this._callTranscriptICalUid;
    };
    /**
     * Sets the callTranscriptICalUid property value. Unique identifier for a call transcript.
     * @param value Value to set for the callTranscriptICalUid property.
     */
    public set callTranscriptICalUid(value: string | undefined) {
        this._callTranscriptICalUid = value;
    };
    /**
     * Instantiates a new CallTranscriptEventMessageDetail and sets the default values.
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
            "callId": n => { this.callId = n.getStringValue(); },
            "callTranscriptICalUid": n => { this.callTranscriptICalUid = n.getStringValue(); },
            "meetingOrganizer": n => { this.meetingOrganizer = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the meetingOrganizer property value. The organizer of the meeting.
     * @returns a identitySet
     */
    public get meetingOrganizer() {
        return this._meetingOrganizer;
    };
    /**
     * Sets the meetingOrganizer property value. The organizer of the meeting.
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
        writer.writeStringValue("callTranscriptICalUid", this.callTranscriptICalUid);
        writer.writeObjectValue<IdentitySet>("meetingOrganizer", this.meetingOrganizer);
    };
}
