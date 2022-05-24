import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This type represents the set of policies that dictate how bookings can be created in a Booking Calendar. */
export class BookingSchedulingPolicyImpl implements AdditionalDataHolder, BookingSchedulingPolicy, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** True if to allow customers to choose a specific person for the booking. */
    public allowStaffSelection?: boolean | undefined;
    /** Maximum number of days in advance that a booking can be made. It follows the ISO 8601 format. */
    public maximumAdvance?: Duration | undefined;
    /** The minimum amount of time before which bookings and cancellations must be made. It follows the ISO 8601 format. */
    public minimumLeadTime?: Duration | undefined;
    /** True to notify the business via email when a booking is created or changed. Use the email address specified in the email property of the bookingBusiness entity for the business. */
    public sendConfirmationsToOwner?: boolean | undefined;
    /** Duration of each time slot, denoted in ISO 8601 format. */
    public timeSlotInterval?: Duration | undefined;
    /**
     * Instantiates a new bookingSchedulingPolicy and sets the default values.
     * @param bookingSchedulingPolicyParameterValue 
     */
    public constructor(bookingSchedulingPolicyParameterValue?: BookingSchedulingPolicy | undefined) {
        this.additionalData = bookingSchedulingPolicyParameterValue?.additionalData ? bookingSchedulingPolicyParameterValue?.additionalData! : {}
        this.allowStaffSelection = bookingSchedulingPolicyParameterValue?.allowStaffSelection ;
        this.maximumAdvance = bookingSchedulingPolicyParameterValue?.maximumAdvance ;
        this.minimumLeadTime = bookingSchedulingPolicyParameterValue?.minimumLeadTime ;
        this.sendConfirmationsToOwner = bookingSchedulingPolicyParameterValue?.sendConfirmationsToOwner ;
        this.timeSlotInterval = bookingSchedulingPolicyParameterValue?.timeSlotInterval ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowStaffSelection": n => { this.allowStaffSelection = n.getBooleanValue(); },
            "maximumAdvance": n => { this.maximumAdvance = n.getDurationValue(); },
            "minimumLeadTime": n => { this.minimumLeadTime = n.getDurationValue(); },
            "sendConfirmationsToOwner": n => { this.sendConfirmationsToOwner = n.getBooleanValue(); },
            "timeSlotInterval": n => { this.timeSlotInterval = n.getDurationValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowStaffSelection){
        writer.writeBooleanValue("allowStaffSelection", this.allowStaffSelection);
        }
        if(this.maximumAdvance){
        writer.writeDurationValue("maximumAdvance", this.maximumAdvance);
        }
        if(this.minimumLeadTime){
        writer.writeDurationValue("minimumLeadTime", this.minimumLeadTime);
        }
        if(this.sendConfirmationsToOwner){
        writer.writeBooleanValue("sendConfirmationsToOwner", this.sendConfirmationsToOwner);
        }
        if(this.timeSlotInterval){
        writer.writeDurationValue("timeSlotInterval", this.timeSlotInterval);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
