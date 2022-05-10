import {TimeSlotImpl} from '../../../../../../../../../../../models/';
import {createTimeSlotFromDiscriminatorValue} from '../../../../../../../../../../../models/createTimeSlotFromDiscriminatorValue';
import {TimeSlot} from '../../../../../../../../../../../models/timeSlot';
import {DeclineRequestBody} from './declineRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the decline method.  */
export class DeclineRequestBodyImpl implements AdditionalDataHolder, DeclineRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The Comment property  */
    comment?: string | undefined;
    /** The ProposedNewTime property  */
    proposedNewTime?: TimeSlot | undefined;
    /** The SendResponse property  */
    sendResponse?: boolean | undefined;
    /**
     * Instantiates a new declineRequestBody and sets the default values.
     * @param declineRequestBodyParameterValue 
     */
    public constructor(declineRequestBodyParameterValue?: DeclineRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = declineRequestBodyParameterValue?.additionalData ? {} : declineRequestBodyParameterValue?.additionalData!
        this.comment = declineRequestBodyParameterValue?.comment ;
        this.proposedNewTime = declineRequestBodyParameterValue?.proposedNewTime ;
        this.sendResponse = declineRequestBodyParameterValue?.sendResponse ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "proposedNewTime": n => { this.proposedNewTime = n.getObjectValue<TimeSlotImpl>(createTimeSlotFromDiscriminatorValue); },
            "sendResponse": n => { this.sendResponse = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.comment){
        if(this.comment)
        writer.writeStringValue("comment", this.comment);
        }
        if(this.proposedNewTime){
        if(this.proposedNewTime)
        writer.writeObjectValue<TimeSlotImpl>("proposedNewTime", new TimeSlotImpl(this.proposedNewTime));
        }
        if(this.sendResponse){
        if(this.sendResponse)
        writer.writeBooleanValue("sendResponse", this.sendResponse);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
