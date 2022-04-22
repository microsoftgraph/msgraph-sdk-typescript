import {ChatInfo, MeetingParticipants} from '../../../models/';
import {createChatInfoFromDiscriminatorValue} from '../../../models/createChatInfoFromDiscriminatorValue';
import {createMeetingParticipantsFromDiscriminatorValue} from '../../../models/createMeetingParticipantsFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createOrGet method.  */
export class CreateOrGetRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The chatInfo property  */
    private _chatInfo?: ChatInfo | undefined;
    /** The endDateTime property  */
    private _endDateTime?: Date | undefined;
    /** The externalId property  */
    private _externalId?: string | undefined;
    /** The participants property  */
    private _participants?: MeetingParticipants | undefined;
    /** The startDateTime property  */
    private _startDateTime?: Date | undefined;
    /** The subject property  */
    private _subject?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the chatInfo property value. The chatInfo property
     * @returns a chatInfo
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Sets the chatInfo property value. The chatInfo property
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | undefined) {
        this._chatInfo = value;
    };
    /**
     * Instantiates a new createOrGetRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endDateTime property value. The endDateTime property
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The endDateTime property
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Gets the externalId property value. The externalId property
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. The externalId property
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "chatInfo": n => { this.chatInfo = n.getObjectValue<ChatInfo>(createChatInfoFromDiscriminatorValue); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "participants": n => { this.participants = n.getObjectValue<MeetingParticipants>(createMeetingParticipantsFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Gets the participants property value. The participants property
     * @returns a meetingParticipants
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants property
     * @param value Value to set for the participants property.
     */
    public set participants(value: MeetingParticipants | undefined) {
        this._participants = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ChatInfo>("chatInfo", this.chatInfo);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeObjectValue<MeetingParticipants>("participants", this.participants);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("subject", this.subject);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
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
}
