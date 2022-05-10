import {ChatInfoImpl, MeetingParticipantsImpl} from '../../../models/';
import {ChatInfo} from '../../../models/chatInfo';
import {createChatInfoFromDiscriminatorValue} from '../../../models/createChatInfoFromDiscriminatorValue';
import {createMeetingParticipantsFromDiscriminatorValue} from '../../../models/createMeetingParticipantsFromDiscriminatorValue';
import {MeetingParticipants} from '../../../models/meetingParticipants';
import {CreateOrGetRequestBody} from './createOrGetRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createOrGet method.  */
export class CreateOrGetRequestBodyImpl implements AdditionalDataHolder, CreateOrGetRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The chatInfo property  */
    chatInfo?: ChatInfo | undefined;
    /** The endDateTime property  */
    endDateTime?: Date | undefined;
    /** The externalId property  */
    externalId?: string | undefined;
    /** The participants property  */
    participants?: MeetingParticipants | undefined;
    /** The startDateTime property  */
    startDateTime?: Date | undefined;
    /** The subject property  */
    subject?: string | undefined;
    /**
     * Instantiates a new createOrGetRequestBody and sets the default values.
     * @param createOrGetRequestBodyParameterValue 
     */
    public constructor(createOrGetRequestBodyParameterValue?: CreateOrGetRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = createOrGetRequestBodyParameterValue?.additionalData ? {} : createOrGetRequestBodyParameterValue?.additionalData!
        this.chatInfo = createOrGetRequestBodyParameterValue?.chatInfo ;
        this.endDateTime = createOrGetRequestBodyParameterValue?.endDateTime ;
        this.externalId = createOrGetRequestBodyParameterValue?.externalId ;
        this.participants = createOrGetRequestBodyParameterValue?.participants ;
        this.startDateTime = createOrGetRequestBodyParameterValue?.startDateTime ;
        this.subject = createOrGetRequestBodyParameterValue?.subject ;
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
        if(this.chatInfo)
        writer.writeObjectValue<ChatInfoImpl>("chatInfo", new ChatInfoImpl(this.chatInfo));
        }
        if(this.endDateTime){
        if(this.endDateTime)
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.externalId){
        if(this.externalId)
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.participants){
        if(this.participants)
        writer.writeObjectValue<MeetingParticipantsImpl>("participants", new MeetingParticipantsImpl(this.participants));
        }
        if(this.startDateTime){
        if(this.startDateTime)
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.subject){
        if(this.subject)
        writer.writeStringValue("subject", this.subject);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
