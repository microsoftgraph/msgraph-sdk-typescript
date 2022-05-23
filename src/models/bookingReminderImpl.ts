import {BookingReminder} from './bookingReminder';
import {BookingReminderRecipients} from './bookingReminderRecipients';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This type represents when and to whom to send an e-mail reminder. */
export class BookingReminderImpl implements AdditionalDataHolder, BookingReminder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The message in the reminder. */
    public message?: string | undefined;
    /** The amount of time before the start of an appointment that the reminder should be sent. It's denoted in ISO 8601 format. */
    public offset?: Duration | undefined;
    /** The persons who should receive the reminder. Possible values are: allAttendees, staff, customer and unknownFutureValue. */
    public recipients?: BookingReminderRecipients | undefined;
    /**
     * Instantiates a new bookingReminder and sets the default values.
     * @param bookingReminderParameterValue 
     */
    public constructor(bookingReminderParameterValue?: BookingReminder | undefined) {
        this.additionalData = bookingReminderParameterValue?.additionalData ? bookingReminderParameterValue?.additionalData! : {}
        this.message = bookingReminderParameterValue?.message ;
        this.offset = bookingReminderParameterValue?.offset ;
        this.recipients = bookingReminderParameterValue?.recipients ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "message": n => { this.message = n.getStringValue(); },
            "offset": n => { this.offset = n.getDurationValue(); },
            "recipients": n => { this.recipients = n.getEnumValue<BookingReminderRecipients>(BookingReminderRecipients); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        if(this.offset){
        writer.writeDurationValue("offset", this.offset);
        }
        if(this.recipients){
        writer.writeEnumValue<BookingReminderRecipients>("recipients", this.recipients);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
