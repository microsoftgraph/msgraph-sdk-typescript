import {BookingWorkHours} from './bookingWorkHours';
import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {createBookingWorkTimeSlotFromDiscriminatorValue} from './createBookingWorkTimeSlotFromDiscriminatorValue';
import {DayOfWeek} from './dayOfWeek';
import {BookingWorkTimeSlotImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This type represents the set of working hours in a single day of the week. */
export class BookingWorkHoursImpl implements AdditionalDataHolder, BookingWorkHours, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The day of the week represented by this instance. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. */
    public day?: DayOfWeek | undefined;
    /** A list of start/end times during a day. */
    public timeSlots?: BookingWorkTimeSlot[] | undefined;
    /**
     * Instantiates a new bookingWorkHours and sets the default values.
     * @param bookingWorkHoursParameterValue 
     */
    public constructor(bookingWorkHoursParameterValue?: BookingWorkHours | undefined) {
        this.additionalData = bookingWorkHoursParameterValue?.additionalData ? bookingWorkHoursParameterValue?.additionalData! : {}
        this.day = bookingWorkHoursParameterValue?.day ;
        this.timeSlots = bookingWorkHoursParameterValue?.timeSlots ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "day": n => { this.day = n.getEnumValue<DayOfWeek>(DayOfWeek); },
            "timeSlots": n => { this.timeSlots = n.getCollectionOfObjectValues<BookingWorkTimeSlotImpl>(createBookingWorkTimeSlotFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.day){
        writer.writeEnumValue<DayOfWeek>("day", this.day);
        }
        if(this.timeSlots && this.timeSlots.length != 0){        const timeSlotsArrValue: BookingWorkTimeSlotImpl[] = []; this.timeSlots?.forEach(element => {timeSlotsArrValue.push(new BookingWorkTimeSlotImpl(element));});
        writer.writeCollectionOfObjectValues<BookingWorkTimeSlotImpl>("timeSlots", timeSlotsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
