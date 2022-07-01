import {BookingWorkHours} from './bookingWorkHours';
import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {createBookingWorkTimeSlotFromDiscriminatorValue} from './createBookingWorkTimeSlotFromDiscriminatorValue';
import {DayOfWeek} from './dayOfWeek';
import {BookingWorkTimeSlotImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This type represents the set of working hours in a single day of the week. */
export class BookingWorkHoursImpl implements BookingWorkHours {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The day of the week represented by this instance. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. */
    private _day?: DayOfWeek | undefined;
    /** A list of start/end times during a day. */
    private _timeSlots?: BookingWorkTimeSlot[] | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new bookingWorkHours and sets the default values.
     * @param bookingWorkHoursParameterValue 
     */
    public constructor(bookingWorkHoursParameterValue?: BookingWorkHours | undefined) {
        this._additionalData = bookingWorkHoursParameterValue?.additionalData ? bookingWorkHoursParameterValue?.additionalData! : {};
        this._day = bookingWorkHoursParameterValue?.day;
        this._timeSlots = bookingWorkHoursParameterValue?.timeSlots;
    };
    /**
     * Gets the day property value. The day of the week represented by this instance. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday.
     * @returns a dayOfWeek
     */
    public get day() {
        return this._day;
    };
    /**
     * Sets the day property value. The day of the week represented by this instance. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday.
     * @param value Value to set for the day property.
     */
    public set day(value: DayOfWeek | undefined) {
        if(value) {
            this._day = value;
        }
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
        if(this.timeSlots && this.timeSlots.length != 0){        const timeSlotsArrValue: BookingWorkTimeSlotImpl[] = [];
        this.timeSlots?.forEach(element => {
            timeSlotsArrValue.push((element instanceof BookingWorkTimeSlotImpl? element:new BookingWorkTimeSlotImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingWorkTimeSlotImpl>("timeSlots", timeSlotsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeSlots property value. A list of start/end times during a day.
     * @returns a BookingWorkTimeSlotInterface
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * Sets the timeSlots property value. A list of start/end times during a day.
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: BookingWorkTimeSlot[] | undefined) {
        if(value) {
            const timeSlotsArrValue: BookingWorkTimeSlotImpl[] = [];
            this.timeSlots?.forEach(element => {
                timeSlotsArrValue.push((element instanceof BookingWorkTimeSlotImpl? element:new BookingWorkTimeSlotImpl(element)));
            });
            this._timeSlots = timeSlotsArrValue;
        }
    };
}
