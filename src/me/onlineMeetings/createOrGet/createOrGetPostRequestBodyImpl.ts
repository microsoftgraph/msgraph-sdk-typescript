import {ChatInfoImpl, MeetingParticipantsImpl} from '../../../models/';
import {ChatInfo} from '../../../models/chatInfo';
import {createChatInfoFromDiscriminatorValue} from '../../../models/createChatInfoFromDiscriminatorValue';
import {createMeetingParticipantsFromDiscriminatorValue} from '../../../models/createMeetingParticipantsFromDiscriminatorValue';
import {MeetingParticipants} from '../../../models/meetingParticipants';
import {CreateOrGetPostRequestBody} from './createOrGetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createOrGet method. */
export class CreateOrGetPostRequestBodyImpl implements AdditionalDataHolder, CreateOrGetPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The chatInfo property */
    public chatInfo?: ChatInfo | undefined;
    /** The endDateTime property */
    public endDateTime?: Date | undefined;
    /** The externalId property */
    public externalId?: string | undefined;
    /** The participants property */
    public participants?: MeetingParticipants | undefined;
    /** The startDateTime property */
    public startDateTime?: Date | undefined;
    /** The subject property */
    public subject?: string | undefined;
    /**
     * Instantiates a new createOrGetPostRequestBody and sets the default values.
     * @param createOrGetPostRequestBodyParameterValue 
     */
    public constructor(createOrGetPostRequestBodyParameterValue?: CreateOrGetPostRequestBody | undefined) {
        this.additionalData = createOrGetPostRequestBodyParameterValue?.additionalData ? createOrGetPostRequestBodyParameterValue?.additionalData! : {}
        this.chatInfo = createOrGetPostRequestBodyParameterValue?.chatInfo ;
        this.endDateTime = createOrGetPostRequestBodyParameterValue?.endDateTime ;
        this.externalId = createOrGetPostRequestBodyParameterValue?.externalId ;
        this.participants = createOrGetPostRequestBodyParameterValue?.participants ;
        this.startDateTime = createOrGetPostRequestBodyParameterValue?.startDateTime ;
        this.subject = createOrGetPostRequestBodyParameterValue?.subject ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.chatInfo){
        writer.writeObjectValue<ChatInfoImpl>("chatInfo", new ChatInfoImpl(this.chatInfo));
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.externalId){
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.participants){
        writer.writeObjectValue<MeetingParticipantsImpl>("participants", new MeetingParticipantsImpl(this.participants));
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.subject){
        writer.writeStringValue("subject", this.subject);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
