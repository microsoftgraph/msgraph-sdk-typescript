import {ChatInfoImpl, MeetingParticipantsImpl} from '../../../../models/';
import {ChatInfo} from '../../../../models/chatInfo';
import {createChatInfoFromDiscriminatorValue} from '../../../../models/createChatInfoFromDiscriminatorValue';
import {createMeetingParticipantsFromDiscriminatorValue} from '../../../../models/createMeetingParticipantsFromDiscriminatorValue';
import {MeetingParticipants} from '../../../../models/meetingParticipants';
import {CreateOrGetPostRequestBody} from './createOrGetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createOrGet method. */
export class CreateOrGetPostRequestBodyImpl implements CreateOrGetPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The chatInfo property */
    private _chatInfo?: ChatInfo | undefined;
    /** The endDateTime property */
    private _endDateTime?: Date | undefined;
    /** The externalId property */
    private _externalId?: string | undefined;
    /** The participants property */
    private _participants?: MeetingParticipants | undefined;
    /** The startDateTime property */
    private _startDateTime?: Date | undefined;
    /** The subject property */
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the chatInfo property value. The chatInfo property
     * @returns a ChatInfoInterface
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Sets the chatInfo property value. The chatInfo property
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | undefined) {
        if(value) {
            this._chatInfo = value instanceof ChatInfoImpl? value : new ChatInfoImpl(value);
        }
    };
    /**
     * Instantiates a new createOrGetPostRequestBody and sets the default values.
     * @param createOrGetPostRequestBodyParameterValue 
     */
    public constructor(createOrGetPostRequestBodyParameterValue?: CreateOrGetPostRequestBody | undefined) {
        this._additionalData = createOrGetPostRequestBodyParameterValue?.additionalData ? createOrGetPostRequestBodyParameterValue?.additionalData! : {};
        this._chatInfo = createOrGetPostRequestBodyParameterValue?.chatInfo;
        this._endDateTime = createOrGetPostRequestBodyParameterValue?.endDateTime;
        this._externalId = createOrGetPostRequestBodyParameterValue?.externalId;
        this._participants = createOrGetPostRequestBodyParameterValue?.participants;
        this._startDateTime = createOrGetPostRequestBodyParameterValue?.startDateTime;
        this._subject = createOrGetPostRequestBodyParameterValue?.subject;
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
        if(value) {
            this._endDateTime = value;
        }
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
        if(value) {
            this._externalId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "chatInfo": n => { this.chatInfo = n.getObjectValue<ChatInfoImpl>(createChatInfoFromDiscriminatorValue); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "participants": n => { this.participants = n.getObjectValue<MeetingParticipantsImpl>(createMeetingParticipantsFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Gets the participants property value. The participants property
     * @returns a MeetingParticipantsInterface
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants property
     * @param value Value to set for the participants property.
     */
    public set participants(value: MeetingParticipants | undefined) {
        if(value) {
            this._participants = value instanceof MeetingParticipantsImpl? value : new MeetingParticipantsImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.chatInfo){
            writer.writeObjectValue<ChatInfoImpl>("chatInfo", (!this.chatInfo || this.chatInfo instanceof ChatInfoImpl? this.chatInfo : new ChatInfoImpl(this.chatInfo)));
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.externalId){
            writer.writeStringValue("externalId", this.externalId);
        }
        if(this.participants){
            writer.writeObjectValue<MeetingParticipantsImpl>("participants", (!this.participants || this.participants instanceof MeetingParticipantsImpl? this.participants : new MeetingParticipantsImpl(this.participants)));
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.subject){
            writer.writeStringValue("subject", this.subject);
        }
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
        if(value) {
            this._startDateTime = value;
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
}
