import {TimeSlotImpl} from '../../../../../../../../../../../models/';
import {createTimeSlotFromDiscriminatorValue} from '../../../../../../../../../../../models/createTimeSlotFromDiscriminatorValue';
import {TimeSlot} from '../../../../../../../../../../../models/timeSlot';
import {DeclinePostRequestBody} from './declinePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the decline method. */
export class DeclinePostRequestBodyImpl implements AdditionalDataHolder, DeclinePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Comment property */
    public comment?: string | undefined;
    /** The ProposedNewTime property */
    public proposedNewTime?: TimeSlot | undefined;
    /** The SendResponse property */
    public sendResponse?: boolean | undefined;
    /**
     * Instantiates a new declinePostRequestBody and sets the default values.
     * @param declinePostRequestBodyParameterValue 
     */
    public constructor(declinePostRequestBodyParameterValue?: DeclinePostRequestBody | undefined) {
        this.additionalData = declinePostRequestBodyParameterValue?.additionalData ? declinePostRequestBodyParameterValue?.additionalData! : {}
        this.comment = declinePostRequestBodyParameterValue?.comment ;
        this.proposedNewTime = declinePostRequestBodyParameterValue?.proposedNewTime ;
        this.sendResponse = declinePostRequestBodyParameterValue?.sendResponse ;
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
        writer.writeStringValue("comment", this.comment);
        }
        if(this.proposedNewTime){
        writer.writeObjectValue<TimeSlotImpl>("proposedNewTime", new TimeSlotImpl(this.proposedNewTime));
        }
        if(this.sendResponse){
        writer.writeBooleanValue("sendResponse", this.sendResponse);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
