import {createBookingQuestionAnswerFromDiscriminatorValue} from './createBookingQuestionAnswerFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {BookingCustomerInformationBase, BookingQuestionAnswer, Location} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingCustomerInformation extends BookingCustomerInformationBase implements Parsable {
    /** The ID of the bookingCustomer for this appointment. If no ID is specified when an appointment is created, then a new bookingCustomer object is created. Once set, you should consider the customerId immutable. */
    private _customerId?: string | undefined;
    /** It consists of the list of custom questions and answers given by the customer as part of the appointment */
    private _customQuestionAnswers?: BookingQuestionAnswer[] | undefined;
    /** The SMTP address of the bookingCustomer who is booking the appointment */
    private _emailAddress?: string | undefined;
    /** Represents location information for the bookingCustomer who is booking the appointment. */
    private _location?: Location | undefined;
    /** The customer's name. */
    private _name?: string | undefined;
    /** Notes from the customer associated with this appointment. You can get the value only when reading this bookingAppointment by its ID. You can set this property only when initially creating an appointment with a new customer. After that point, the value is computed from the customer represented by the customerId. */
    private _notes?: string | undefined;
    /** The customer's phone number. */
    private _phone?: string | undefined;
    /** The time zone of the customer. For a list of possible values, see dateTimeTimeZone. */
    private _timeZone?: string | undefined;
    /**
     * Instantiates a new BookingCustomerInformation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.bookingCustomerInformation";
    };
    /**
     * Gets the customerId property value. The ID of the bookingCustomer for this appointment. If no ID is specified when an appointment is created, then a new bookingCustomer object is created. Once set, you should consider the customerId immutable.
     * @returns a string
     */
    public get customerId() {
        return this._customerId;
    };
    /**
     * Sets the customerId property value. The ID of the bookingCustomer for this appointment. If no ID is specified when an appointment is created, then a new bookingCustomer object is created. Once set, you should consider the customerId immutable.
     * @param value Value to set for the customerId property.
     */
    public set customerId(value: string | undefined) {
        this._customerId = value;
    };
    /**
     * Gets the customQuestionAnswers property value. It consists of the list of custom questions and answers given by the customer as part of the appointment
     * @returns a bookingQuestionAnswer
     */
    public get customQuestionAnswers() {
        return this._customQuestionAnswers;
    };
    /**
     * Sets the customQuestionAnswers property value. It consists of the list of custom questions and answers given by the customer as part of the appointment
     * @param value Value to set for the customQuestionAnswers property.
     */
    public set customQuestionAnswers(value: BookingQuestionAnswer[] | undefined) {
        this._customQuestionAnswers = value;
    };
    /**
     * Gets the emailAddress property value. The SMTP address of the bookingCustomer who is booking the appointment
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The SMTP address of the bookingCustomer who is booking the appointment
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "customerId": n => { this.customerId = n.getStringValue(); },
            "customQuestionAnswers": n => { this.customQuestionAnswers = n.getCollectionOfObjectValues<BookingQuestionAnswer>(createBookingQuestionAnswerFromDiscriminatorValue); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "location": n => { this.location = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "phone": n => { this.phone = n.getStringValue(); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
        };
    };
    /**
     * Gets the location property value. Represents location information for the bookingCustomer who is booking the appointment.
     * @returns a location
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. Represents location information for the bookingCustomer who is booking the appointment.
     * @param value Value to set for the location property.
     */
    public set location(value: Location | undefined) {
        this._location = value;
    };
    /**
     * Gets the name property value. The customer's name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The customer's name.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the notes property value. Notes from the customer associated with this appointment. You can get the value only when reading this bookingAppointment by its ID. You can set this property only when initially creating an appointment with a new customer. After that point, the value is computed from the customer represented by the customerId.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Notes from the customer associated with this appointment. You can get the value only when reading this bookingAppointment by its ID. You can set this property only when initially creating an appointment with a new customer. After that point, the value is computed from the customer represented by the customerId.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Gets the phone property value. The customer's phone number.
     * @returns a string
     */
    public get phone() {
        return this._phone;
    };
    /**
     * Sets the phone property value. The customer's phone number.
     * @param value Value to set for the phone property.
     */
    public set phone(value: string | undefined) {
        this._phone = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("customerId", this.customerId);
        writer.writeCollectionOfObjectValues<BookingQuestionAnswer>("customQuestionAnswers", this.customQuestionAnswers);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeObjectValue<Location>("location", this.location);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("notes", this.notes);
        writer.writeStringValue("phone", this.phone);
        writer.writeStringValue("timeZone", this.timeZone);
    };
    /**
     * Gets the timeZone property value. The time zone of the customer. For a list of possible values, see dateTimeTimeZone.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. The time zone of the customer. For a list of possible values, see dateTimeTimeZone.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
}
