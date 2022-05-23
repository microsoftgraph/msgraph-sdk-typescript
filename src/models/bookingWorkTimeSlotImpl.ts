import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class BookingWorkTimeSlotImpl implements AdditionalDataHolder, BookingWorkTimeSlot, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The time of the day when work stops. For example, 17:00:00.0000000. */
    public endTime?: TimeOnly | undefined;
    /** The time of the day when work starts. For example, 08:00:00.0000000. */
    public startTime?: TimeOnly | undefined;
    /**
     * Instantiates a new bookingWorkTimeSlot and sets the default values.
     * @param bookingWorkTimeSlotParameterValue 
     */
    public constructor(bookingWorkTimeSlotParameterValue?: BookingWorkTimeSlot | undefined) {
        this.additionalData = bookingWorkTimeSlotParameterValue?.additionalData ? bookingWorkTimeSlotParameterValue?.additionalData! : {}
        this.endTime = bookingWorkTimeSlotParameterValue?.endTime ;
        this.startTime = bookingWorkTimeSlotParameterValue?.startTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endTime": n => { this.endTime = n.getTimeOnlyValue(); },
            "startTime": n => { this.startTime = n.getTimeOnlyValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.endTime){
        writer.writeTimeOnlyValue("endTime", this.endTime);
        }
        if(this.startTime){
        writer.writeTimeOnlyValue("startTime", this.startTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
