import {TimeSlotImpl} from '../../../../../../../../../models/';
import {createTimeSlotFromDiscriminatorValue} from '../../../../../../../../../models/createTimeSlotFromDiscriminatorValue';
import {TimeSlot} from '../../../../../../../../../models/timeSlot';
import {TentativelyAcceptPostRequestBody} from './tentativelyAcceptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the tentativelyAccept method. */
export class TentativelyAcceptPostRequestBodyImpl implements AdditionalDataHolder, Parsable, TentativelyAcceptPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Comment property */
    public comment?: string | undefined;
    /** The ProposedNewTime property */
    public proposedNewTime?: TimeSlot | undefined;
    /** The SendResponse property */
    public sendResponse?: boolean | undefined;
    /**
     * Instantiates a new tentativelyAcceptPostRequestBody and sets the default values.
     * @param tentativelyAcceptPostRequestBodyParameterValue 
     */
    public constructor(tentativelyAcceptPostRequestBodyParameterValue?: TentativelyAcceptPostRequestBody | undefined) {
        this.additionalData = tentativelyAcceptPostRequestBodyParameterValue?.additionalData ? tentativelyAcceptPostRequestBodyParameterValue?.additionalData! : {}
        this.comment = tentativelyAcceptPostRequestBodyParameterValue?.comment ;
        this.proposedNewTime = tentativelyAcceptPostRequestBodyParameterValue?.proposedNewTime ;
        this.sendResponse = tentativelyAcceptPostRequestBodyParameterValue?.sendResponse ;
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
