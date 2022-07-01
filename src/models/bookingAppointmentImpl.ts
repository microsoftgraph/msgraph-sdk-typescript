import {BookingAppointment} from './bookingAppointment';
import {BookingCustomerInformationBase} from './bookingCustomerInformationBase';
import {BookingPriceType} from './bookingPriceType';
import {BookingReminder} from './bookingReminder';
import {createBookingCustomerInformationBaseFromDiscriminatorValue} from './createBookingCustomerInformationBaseFromDiscriminatorValue';
import {createBookingReminderFromDiscriminatorValue} from './createBookingReminderFromDiscriminatorValue';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {BookingCustomerInformationBaseImpl, BookingReminderImpl, DateTimeTimeZoneImpl, EntityImpl, LocationImpl} from './index';
import {Location} from './location';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a booked appointment of a service by a customer in a business. */
export class BookingAppointmentImpl extends EntityImpl implements BookingAppointment {
    /** Additional information that is sent to the customer when an appointment is confirmed. */
    private _additionalInformation?: string | undefined;
    /** It lists down the customer properties for an appointment. An appointment will contain a list of customer information and each unit will indicate the properties of a customer who is part of that appointment. Optional. */
    private _customers?: BookingCustomerInformationBase[] | undefined;
    /** The time zone of the customer. For a list of possible values, see dateTimeTimeZone. */
    private _customerTimeZone?: string | undefined;
    /** The length of the appointment, denoted in ISO8601 format. */
    private _duration?: Duration | undefined;
    /** The endDateTime property */
    private _endDateTime?: DateTimeTimeZone | undefined;
    /** The current number of customers in the appointment. */
    private _filledAttendeesCount?: number | undefined;
    /** True indicates that the appointment will be held online. Default value is false. */
    private _isLocationOnline?: boolean | undefined;
    /** The URL of the online meeting for the appointment. */
    private _joinWebUrl?: string | undefined;
    /** The maximum number of customers allowed in an appointment. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment. To create a customer, use the Create bookingCustomer operation. */
    private _maximumAttendeesCount?: number | undefined;
    /** True indicates that the bookingCustomer for this appointment does not wish to receive a confirmation for this appointment. */
    private _optOutOfCustomerEmail?: boolean | undefined;
    /** The amount of time to reserve after the appointment ends, for cleaning up, as an example. The value is expressed in ISO8601 format. */
    private _postBuffer?: Duration | undefined;
    /** The amount of time to reserve before the appointment begins, for preparation, as an example. The value is expressed in ISO8601 format. */
    private _preBuffer?: Duration | undefined;
    /** The regular price for an appointment for the specified bookingService. */
    private _price?: number | undefined;
    /** A setting to provide flexibility for the pricing structure of services. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue. */
    private _priceType?: BookingPriceType | undefined;
    /** The collection of customer reminders sent for this appointment. The value of this property is available only when reading this bookingAppointment by its ID. */
    private _reminders?: BookingReminder[] | undefined;
    /** An additional tracking ID for the appointment, if the appointment has been created directly by the customer on the scheduling page, as opposed to by a staff member on the behalf of the customer. */
    private _selfServiceAppointmentId?: string | undefined;
    /** The ID of the bookingService associated with this appointment. */
    private _serviceId?: string | undefined;
    /** The location where the service is delivered. */
    private _serviceLocation?: Location | undefined;
    /** The name of the bookingService associated with this appointment.This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the serviceId property. */
    private _serviceName?: string | undefined;
    /** Notes from a bookingStaffMember. The value of this property is available only when reading this bookingAppointment by its ID. */
    private _serviceNotes?: string | undefined;
    /** True indicates SMS notifications will be sent to the customers for the appointment. Default value is false. */
    private _smsNotificationsEnabled?: boolean | undefined;
    /** The ID of each bookingStaffMember who is scheduled in this appointment. */
    private _staffMemberIds?: string[] | undefined;
    /** The startDateTime property */
    private _startDateTime?: DateTimeTimeZone | undefined;
    /**
     * Gets the additionalInformation property value. Additional information that is sent to the customer when an appointment is confirmed.
     * @returns a string
     */
    public get additionalInformation() {
        return this._additionalInformation;
    };
    /**
     * Sets the additionalInformation property value. Additional information that is sent to the customer when an appointment is confirmed.
     * @param value Value to set for the additionalInformation property.
     */
    public set additionalInformation(value: string | undefined) {
        if(value) {
            this._additionalInformation = value;
        }
    };
    /**
     * Instantiates a new bookingAppointment and sets the default values.
     * @param bookingAppointmentParameterValue 
     */
    public constructor(bookingAppointmentParameterValue?: BookingAppointment | undefined) {
        super(bookingAppointmentParameterValue);
        this._additionalInformation = bookingAppointmentParameterValue?.additionalInformation;
        this._customers = bookingAppointmentParameterValue?.customers;
        this._customerTimeZone = bookingAppointmentParameterValue?.customerTimeZone;
        this._duration = bookingAppointmentParameterValue?.duration;
        this._endDateTime = bookingAppointmentParameterValue?.endDateTime;
        this._filledAttendeesCount = bookingAppointmentParameterValue?.filledAttendeesCount;
        this._isLocationOnline = bookingAppointmentParameterValue?.isLocationOnline;
        this._joinWebUrl = bookingAppointmentParameterValue?.joinWebUrl;
        this._maximumAttendeesCount = bookingAppointmentParameterValue?.maximumAttendeesCount;
        this._optOutOfCustomerEmail = bookingAppointmentParameterValue?.optOutOfCustomerEmail;
        this._postBuffer = bookingAppointmentParameterValue?.postBuffer;
        this._preBuffer = bookingAppointmentParameterValue?.preBuffer;
        this._price = bookingAppointmentParameterValue?.price;
        this._priceType = bookingAppointmentParameterValue?.priceType;
        this._reminders = bookingAppointmentParameterValue?.reminders;
        this._selfServiceAppointmentId = bookingAppointmentParameterValue?.selfServiceAppointmentId;
        this._serviceId = bookingAppointmentParameterValue?.serviceId;
        this._serviceLocation = bookingAppointmentParameterValue?.serviceLocation;
        this._serviceName = bookingAppointmentParameterValue?.serviceName;
        this._serviceNotes = bookingAppointmentParameterValue?.serviceNotes;
        this._smsNotificationsEnabled = bookingAppointmentParameterValue?.smsNotificationsEnabled;
        this._staffMemberIds = bookingAppointmentParameterValue?.staffMemberIds;
        this._startDateTime = bookingAppointmentParameterValue?.startDateTime;
    };
    /**
     * Gets the customers property value. It lists down the customer properties for an appointment. An appointment will contain a list of customer information and each unit will indicate the properties of a customer who is part of that appointment. Optional.
     * @returns a BookingCustomerInformationBaseInterface
     */
    public get customers() {
        return this._customers;
    };
    /**
     * Sets the customers property value. It lists down the customer properties for an appointment. An appointment will contain a list of customer information and each unit will indicate the properties of a customer who is part of that appointment. Optional.
     * @param value Value to set for the customers property.
     */
    public set customers(value: BookingCustomerInformationBase[] | undefined) {
        if(value) {
            const customersArrValue: BookingCustomerInformationBaseImpl[] = [];
            this.customers?.forEach(element => {
                customersArrValue.push((element instanceof BookingCustomerInformationBaseImpl? element as BookingCustomerInformationBaseImpl:new BookingCustomerInformationBaseImpl(element)));
            });
            this._customers = customersArrValue;
        }
    };
    /**
     * Gets the customerTimeZone property value. The time zone of the customer. For a list of possible values, see dateTimeTimeZone.
     * @returns a string
     */
    public get customerTimeZone() {
        return this._customerTimeZone;
    };
    /**
     * Sets the customerTimeZone property value. The time zone of the customer. For a list of possible values, see dateTimeTimeZone.
     * @param value Value to set for the customerTimeZone property.
     */
    public set customerTimeZone(value: string | undefined) {
        if(value) {
            this._customerTimeZone = value;
        }
    };
    /**
     * Gets the duration property value. The length of the appointment, denoted in ISO8601 format.
     * @returns a Duration
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. The length of the appointment, denoted in ISO8601 format.
     * @param value Value to set for the duration property.
     */
    public set duration(value: Duration | undefined) {
        if(value) {
            this._duration = value;
        }
    };
    /**
     * Gets the endDateTime property value. The endDateTime property
     * @returns a DateTimeTimeZoneInterface
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The endDateTime property
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._endDateTime = value instanceof DateTimeTimeZoneImpl? value as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Gets the filledAttendeesCount property value. The current number of customers in the appointment.
     * @returns a integer
     */
    public get filledAttendeesCount() {
        return this._filledAttendeesCount;
    };
    /**
     * Sets the filledAttendeesCount property value. The current number of customers in the appointment.
     * @param value Value to set for the filledAttendeesCount property.
     */
    public set filledAttendeesCount(value: number | undefined) {
        if(value) {
            this._filledAttendeesCount = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalInformation": n => { this.additionalInformation = n.getStringValue(); },
            "customers": n => { this.customers = n.getCollectionOfObjectValues<BookingCustomerInformationBaseImpl>(createBookingCustomerInformationBaseFromDiscriminatorValue); },
            "customerTimeZone": n => { this.customerTimeZone = n.getStringValue(); },
            "duration": n => { this.duration = n.getDurationValue(); },
            "endDateTime": n => { this.endDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "filledAttendeesCount": n => { this.filledAttendeesCount = n.getNumberValue(); },
            "isLocationOnline": n => { this.isLocationOnline = n.getBooleanValue(); },
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
            "maximumAttendeesCount": n => { this.maximumAttendeesCount = n.getNumberValue(); },
            "optOutOfCustomerEmail": n => { this.optOutOfCustomerEmail = n.getBooleanValue(); },
            "postBuffer": n => { this.postBuffer = n.getDurationValue(); },
            "preBuffer": n => { this.preBuffer = n.getDurationValue(); },
            "price": n => { this.price = n.getNumberValue(); },
            "priceType": n => { this.priceType = n.getEnumValue<BookingPriceType>(BookingPriceType); },
            "reminders": n => { this.reminders = n.getCollectionOfObjectValues<BookingReminderImpl>(createBookingReminderFromDiscriminatorValue); },
            "selfServiceAppointmentId": n => { this.selfServiceAppointmentId = n.getStringValue(); },
            "serviceId": n => { this.serviceId = n.getStringValue(); },
            "serviceLocation": n => { this.serviceLocation = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "serviceName": n => { this.serviceName = n.getStringValue(); },
            "serviceNotes": n => { this.serviceNotes = n.getStringValue(); },
            "smsNotificationsEnabled": n => { this.smsNotificationsEnabled = n.getBooleanValue(); },
            "staffMemberIds": n => { this.staffMemberIds = n.getCollectionOfPrimitiveValues<string>(); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isLocationOnline property value. True indicates that the appointment will be held online. Default value is false.
     * @returns a boolean
     */
    public get isLocationOnline() {
        return this._isLocationOnline;
    };
    /**
     * Sets the isLocationOnline property value. True indicates that the appointment will be held online. Default value is false.
     * @param value Value to set for the isLocationOnline property.
     */
    public set isLocationOnline(value: boolean | undefined) {
        if(value) {
            this._isLocationOnline = value;
        }
    };
    /**
     * Gets the joinWebUrl property value. The URL of the online meeting for the appointment.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Sets the joinWebUrl property value. The URL of the online meeting for the appointment.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        if(value) {
            this._joinWebUrl = value;
        }
    };
    /**
     * Gets the maximumAttendeesCount property value. The maximum number of customers allowed in an appointment. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment. To create a customer, use the Create bookingCustomer operation.
     * @returns a integer
     */
    public get maximumAttendeesCount() {
        return this._maximumAttendeesCount;
    };
    /**
     * Sets the maximumAttendeesCount property value. The maximum number of customers allowed in an appointment. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment. To create a customer, use the Create bookingCustomer operation.
     * @param value Value to set for the maximumAttendeesCount property.
     */
    public set maximumAttendeesCount(value: number | undefined) {
        if(value) {
            this._maximumAttendeesCount = value;
        }
    };
    /**
     * Gets the optOutOfCustomerEmail property value. True indicates that the bookingCustomer for this appointment does not wish to receive a confirmation for this appointment.
     * @returns a boolean
     */
    public get optOutOfCustomerEmail() {
        return this._optOutOfCustomerEmail;
    };
    /**
     * Sets the optOutOfCustomerEmail property value. True indicates that the bookingCustomer for this appointment does not wish to receive a confirmation for this appointment.
     * @param value Value to set for the optOutOfCustomerEmail property.
     */
    public set optOutOfCustomerEmail(value: boolean | undefined) {
        if(value) {
            this._optOutOfCustomerEmail = value;
        }
    };
    /**
     * Gets the postBuffer property value. The amount of time to reserve after the appointment ends, for cleaning up, as an example. The value is expressed in ISO8601 format.
     * @returns a Duration
     */
    public get postBuffer() {
        return this._postBuffer;
    };
    /**
     * Sets the postBuffer property value. The amount of time to reserve after the appointment ends, for cleaning up, as an example. The value is expressed in ISO8601 format.
     * @param value Value to set for the postBuffer property.
     */
    public set postBuffer(value: Duration | undefined) {
        if(value) {
            this._postBuffer = value;
        }
    };
    /**
     * Gets the preBuffer property value. The amount of time to reserve before the appointment begins, for preparation, as an example. The value is expressed in ISO8601 format.
     * @returns a Duration
     */
    public get preBuffer() {
        return this._preBuffer;
    };
    /**
     * Sets the preBuffer property value. The amount of time to reserve before the appointment begins, for preparation, as an example. The value is expressed in ISO8601 format.
     * @param value Value to set for the preBuffer property.
     */
    public set preBuffer(value: Duration | undefined) {
        if(value) {
            this._preBuffer = value;
        }
    };
    /**
     * Gets the price property value. The regular price for an appointment for the specified bookingService.
     * @returns a double
     */
    public get price() {
        return this._price;
    };
    /**
     * Sets the price property value. The regular price for an appointment for the specified bookingService.
     * @param value Value to set for the price property.
     */
    public set price(value: number | undefined) {
        if(value) {
            this._price = value;
        }
    };
    /**
     * Gets the priceType property value. A setting to provide flexibility for the pricing structure of services. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue.
     * @returns a bookingPriceType
     */
    public get priceType() {
        return this._priceType;
    };
    /**
     * Sets the priceType property value. A setting to provide flexibility for the pricing structure of services. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue.
     * @param value Value to set for the priceType property.
     */
    public set priceType(value: BookingPriceType | undefined) {
        if(value) {
            this._priceType = value;
        }
    };
    /**
     * Gets the reminders property value. The collection of customer reminders sent for this appointment. The value of this property is available only when reading this bookingAppointment by its ID.
     * @returns a BookingReminderInterface
     */
    public get reminders() {
        return this._reminders;
    };
    /**
     * Sets the reminders property value. The collection of customer reminders sent for this appointment. The value of this property is available only when reading this bookingAppointment by its ID.
     * @param value Value to set for the reminders property.
     */
    public set reminders(value: BookingReminder[] | undefined) {
        if(value) {
            const remindersArrValue: BookingReminderImpl[] = [];
            this.reminders?.forEach(element => {
                remindersArrValue.push((element instanceof BookingReminderImpl? element as BookingReminderImpl:new BookingReminderImpl(element)));
            });
            this._reminders = remindersArrValue;
        }
    };
    /**
     * Gets the selfServiceAppointmentId property value. An additional tracking ID for the appointment, if the appointment has been created directly by the customer on the scheduling page, as opposed to by a staff member on the behalf of the customer.
     * @returns a string
     */
    public get selfServiceAppointmentId() {
        return this._selfServiceAppointmentId;
    };
    /**
     * Sets the selfServiceAppointmentId property value. An additional tracking ID for the appointment, if the appointment has been created directly by the customer on the scheduling page, as opposed to by a staff member on the behalf of the customer.
     * @param value Value to set for the selfServiceAppointmentId property.
     */
    public set selfServiceAppointmentId(value: string | undefined) {
        if(value) {
            this._selfServiceAppointmentId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.additionalInformation){
            writer.writeStringValue("additionalInformation", this.additionalInformation);
        }
        if(this.customers && this.customers.length != 0){        const customersArrValue: BookingCustomerInformationBaseImpl[] = [];
        this.customers?.forEach(element => {
            customersArrValue.push((element instanceof BookingCustomerInformationBaseImpl? element as BookingCustomerInformationBaseImpl:new BookingCustomerInformationBaseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingCustomerInformationBaseImpl>("customers", customersArrValue);
        }
        if(this.customerTimeZone){
            writer.writeStringValue("customerTimeZone", this.customerTimeZone);
        }
        if(this.duration){
            writer.writeDurationValue("duration", this.duration);
        }
        if(this.endDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("endDateTime", (this.endDateTime instanceof DateTimeTimeZoneImpl? this.endDateTime as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(this.endDateTime)));
        }
        if(this.filledAttendeesCount){
            writer.writeNumberValue("filledAttendeesCount", this.filledAttendeesCount);
        }
        if(this.isLocationOnline){
            writer.writeBooleanValue("isLocationOnline", this.isLocationOnline);
        }
        if(this.joinWebUrl){
            writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        }
        if(this.maximumAttendeesCount){
            writer.writeNumberValue("maximumAttendeesCount", this.maximumAttendeesCount);
        }
        if(this.optOutOfCustomerEmail){
            writer.writeBooleanValue("optOutOfCustomerEmail", this.optOutOfCustomerEmail);
        }
        if(this.postBuffer){
            writer.writeDurationValue("postBuffer", this.postBuffer);
        }
        if(this.preBuffer){
            writer.writeDurationValue("preBuffer", this.preBuffer);
        }
        if(this.price){
            writer.writeNumberValue("price", this.price);
        }
        if(this.priceType){
            writer.writeEnumValue<BookingPriceType>("priceType", this.priceType);
        }
        if(this.reminders && this.reminders.length != 0){        const remindersArrValue: BookingReminderImpl[] = [];
        this.reminders?.forEach(element => {
            remindersArrValue.push((element instanceof BookingReminderImpl? element as BookingReminderImpl:new BookingReminderImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingReminderImpl>("reminders", remindersArrValue);
        }
        if(this.selfServiceAppointmentId){
            writer.writeStringValue("selfServiceAppointmentId", this.selfServiceAppointmentId);
        }
        if(this.serviceId){
            writer.writeStringValue("serviceId", this.serviceId);
        }
        if(this.serviceLocation){
            writer.writeObjectValue<LocationImpl>("serviceLocation", (this.serviceLocation instanceof LocationImpl? this.serviceLocation as LocationImpl: new LocationImpl(this.serviceLocation)));
        }
        if(this.serviceName){
            writer.writeStringValue("serviceName", this.serviceName);
        }
        if(this.serviceNotes){
            writer.writeStringValue("serviceNotes", this.serviceNotes);
        }
        if(this.smsNotificationsEnabled){
            writer.writeBooleanValue("smsNotificationsEnabled", this.smsNotificationsEnabled);
        }
        if(this.staffMemberIds){
            writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", this.staffMemberIds);
        }
        if(this.startDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("startDateTime", (this.startDateTime instanceof DateTimeTimeZoneImpl? this.startDateTime as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(this.startDateTime)));
        }
    };
    /**
     * Gets the serviceId property value. The ID of the bookingService associated with this appointment.
     * @returns a string
     */
    public get serviceId() {
        return this._serviceId;
    };
    /**
     * Sets the serviceId property value. The ID of the bookingService associated with this appointment.
     * @param value Value to set for the serviceId property.
     */
    public set serviceId(value: string | undefined) {
        if(value) {
            this._serviceId = value;
        }
    };
    /**
     * Gets the serviceLocation property value. The location where the service is delivered.
     * @returns a LocationInterface
     */
    public get serviceLocation() {
        return this._serviceLocation;
    };
    /**
     * Sets the serviceLocation property value. The location where the service is delivered.
     * @param value Value to set for the serviceLocation property.
     */
    public set serviceLocation(value: Location | undefined) {
        if(value) {
            this._serviceLocation = value instanceof LocationImpl? value as LocationImpl: new LocationImpl(value);
        }
    };
    /**
     * Gets the serviceName property value. The name of the bookingService associated with this appointment.This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the serviceId property.
     * @returns a string
     */
    public get serviceName() {
        return this._serviceName;
    };
    /**
     * Sets the serviceName property value. The name of the bookingService associated with this appointment.This property is optional when creating a new appointment. If not specified, it is computed from the service associated with the appointment by the serviceId property.
     * @param value Value to set for the serviceName property.
     */
    public set serviceName(value: string | undefined) {
        if(value) {
            this._serviceName = value;
        }
    };
    /**
     * Gets the serviceNotes property value. Notes from a bookingStaffMember. The value of this property is available only when reading this bookingAppointment by its ID.
     * @returns a string
     */
    public get serviceNotes() {
        return this._serviceNotes;
    };
    /**
     * Sets the serviceNotes property value. Notes from a bookingStaffMember. The value of this property is available only when reading this bookingAppointment by its ID.
     * @param value Value to set for the serviceNotes property.
     */
    public set serviceNotes(value: string | undefined) {
        if(value) {
            this._serviceNotes = value;
        }
    };
    /**
     * Gets the smsNotificationsEnabled property value. True indicates SMS notifications will be sent to the customers for the appointment. Default value is false.
     * @returns a boolean
     */
    public get smsNotificationsEnabled() {
        return this._smsNotificationsEnabled;
    };
    /**
     * Sets the smsNotificationsEnabled property value. True indicates SMS notifications will be sent to the customers for the appointment. Default value is false.
     * @param value Value to set for the smsNotificationsEnabled property.
     */
    public set smsNotificationsEnabled(value: boolean | undefined) {
        if(value) {
            this._smsNotificationsEnabled = value;
        }
    };
    /**
     * Gets the staffMemberIds property value. The ID of each bookingStaffMember who is scheduled in this appointment.
     * @returns a string
     */
    public get staffMemberIds() {
        return this._staffMemberIds;
    };
    /**
     * Sets the staffMemberIds property value. The ID of each bookingStaffMember who is scheduled in this appointment.
     * @param value Value to set for the staffMemberIds property.
     */
    public set staffMemberIds(value: string[] | undefined) {
        if(value) {
            this._staffMemberIds = value;
        }
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a DateTimeTimeZoneInterface
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._startDateTime = value instanceof DateTimeTimeZoneImpl? value as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(value);
        }
    };
}
