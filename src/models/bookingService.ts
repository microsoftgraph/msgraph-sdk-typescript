import {BookingPriceType} from './bookingPriceType';
import {AdminMember1, BookingQuestionAssignment, BookingReminder, BookingSchedulingPolicy, Entity, Location} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a particular service offered by a booking business. */
export class BookingService extends Entity implements Parsable {
    /** Additional information that is sent to the customer when an appointment is confirmed. */
    private _additionalInformation?: string | undefined;
    /** Contains the set of custom questions associated with a particular service. */
    private _customQuestions?: BookingQuestionAssignment | AdminMember1[] | undefined;
    /** The default length of the service, represented in numbers of days, hours, minutes, and seconds. For example, P11D23H59M59.999999999999S. */
    private _defaultDuration?: Duration | undefined;
    /** The default physical location for the service. */
    private _defaultLocation?: Location | AdminMember1 | undefined;
    /** The default monetary price for the service. */
    private _defaultPrice?: number | undefined;
    /** Represents the type of pricing of a booking service. */
    private _defaultPriceType?: BookingPriceType | undefined;
    /** The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID. */
    private _defaultReminders?: BookingReminder | AdminMember1[] | undefined;
    /** A text description for the service. */
    private _description?: string | undefined;
    /** A service name. */
    private _displayName?: string | undefined;
    /** True means this service is not available to customers for booking. */
    private _isHiddenFromCustomers?: boolean | undefined;
    /** True indicates that the appointments for the service will be held online. Default value is false. */
    private _isLocationOnline?: boolean | undefined;
    /** The maximum number of customers allowed in a service. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment.  To create a customer, use the Create bookingCustomer operation. */
    private _maximumAttendeesCount?: number | undefined;
    /** Additional information about this service. */
    private _notes?: string | undefined;
    /** The time to buffer after an appointment for this service ends, and before the next customer appointment can be booked. */
    private _postBuffer?: Duration | undefined;
    /** The time to buffer before an appointment for this service can start. */
    private _preBuffer?: Duration | undefined;
    /** The set of policies that determine how appointments for this type of service should be created and managed. */
    private _schedulingPolicy?: BookingSchedulingPolicy | AdminMember1 | undefined;
    /** True indicates SMS notifications can be sent to the customers for the appointment of the service. Default value is false. */
    private _smsNotificationsEnabled?: boolean | undefined;
    /** Represents those staff members who provide this service. */
    private _staffMemberIds?: string[] | undefined;
    /** The URL a customer uses to access the service. */
    private _webUrl?: string | undefined;
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
        this._additionalInformation = value;
    };
    /**
     * Instantiates a new bookingService and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the customQuestions property value. Contains the set of custom questions associated with a particular service.
     * @returns a admin
     */
    public get customQuestions() {
        return this._customQuestions;
    };
    /**
     * Sets the customQuestions property value. Contains the set of custom questions associated with a particular service.
     * @param value Value to set for the customQuestions property.
     */
    public set customQuestions(value: BookingQuestionAssignment | AdminMember1[] | undefined) {
        this._customQuestions = value;
    };
    /**
     * Gets the defaultDuration property value. The default length of the service, represented in numbers of days, hours, minutes, and seconds. For example, P11D23H59M59.999999999999S.
     * @returns a Duration
     */
    public get defaultDuration() {
        return this._defaultDuration;
    };
    /**
     * Sets the defaultDuration property value. The default length of the service, represented in numbers of days, hours, minutes, and seconds. For example, P11D23H59M59.999999999999S.
     * @param value Value to set for the defaultDuration property.
     */
    public set defaultDuration(value: Duration | undefined) {
        this._defaultDuration = value;
    };
    /**
     * Gets the defaultLocation property value. The default physical location for the service.
     * @returns a admin
     */
    public get defaultLocation() {
        return this._defaultLocation;
    };
    /**
     * Sets the defaultLocation property value. The default physical location for the service.
     * @param value Value to set for the defaultLocation property.
     */
    public set defaultLocation(value: Location | AdminMember1 | undefined) {
        this._defaultLocation = value;
    };
    /**
     * Gets the defaultPrice property value. The default monetary price for the service.
     * @returns a double
     */
    public get defaultPrice() {
        return this._defaultPrice;
    };
    /**
     * Sets the defaultPrice property value. The default monetary price for the service.
     * @param value Value to set for the defaultPrice property.
     */
    public set defaultPrice(value: number | undefined) {
        this._defaultPrice = value;
    };
    /**
     * Gets the defaultPriceType property value. Represents the type of pricing of a booking service.
     * @returns a bookingPriceType
     */
    public get defaultPriceType() {
        return this._defaultPriceType;
    };
    /**
     * Sets the defaultPriceType property value. Represents the type of pricing of a booking service.
     * @param value Value to set for the defaultPriceType property.
     */
    public set defaultPriceType(value: BookingPriceType | undefined) {
        this._defaultPriceType = value;
    };
    /**
     * Gets the defaultReminders property value. The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID.
     * @returns a admin
     */
    public get defaultReminders() {
        return this._defaultReminders;
    };
    /**
     * Sets the defaultReminders property value. The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID.
     * @param value Value to set for the defaultReminders property.
     */
    public set defaultReminders(value: BookingReminder | AdminMember1[] | undefined) {
        this._defaultReminders = value;
    };
    /**
     * Gets the description property value. A text description for the service.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A text description for the service.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. A service name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. A service name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalInformation": n => { this.additionalInformation = n.getStringValue(); },
            "customQuestions": n => { this.customQuestions = n.getObjectValue<BookingQuestionAssignment>(createBookingQuestionAssignmentFromDiscriminatorValue); },
            "defaultDuration": n => { this.defaultDuration = n.getDurationValue(); },
            "defaultLocation": n => { this.defaultLocation = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
            "defaultPrice": n => { this.defaultPrice = n.getNumberValue(); },
            "defaultPriceType": n => { this.defaultPriceType = n.getEnumValue<BookingPriceType>(BookingPriceType); },
            "defaultReminders": n => { this.defaultReminders = n.getObjectValue<BookingReminder>(createBookingReminderFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isHiddenFromCustomers": n => { this.isHiddenFromCustomers = n.getBooleanValue(); },
            "isLocationOnline": n => { this.isLocationOnline = n.getBooleanValue(); },
            "maximumAttendeesCount": n => { this.maximumAttendeesCount = n.getNumberValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "postBuffer": n => { this.postBuffer = n.getDurationValue(); },
            "preBuffer": n => { this.preBuffer = n.getDurationValue(); },
            "schedulingPolicy": n => { this.schedulingPolicy = n.getObjectValue<BookingSchedulingPolicy>(createBookingSchedulingPolicyFromDiscriminatorValue); },
            "smsNotificationsEnabled": n => { this.smsNotificationsEnabled = n.getBooleanValue(); },
            "staffMemberIds": n => { this.staffMemberIds = n.getCollectionOfPrimitiveValues<string>(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the isHiddenFromCustomers property value. True means this service is not available to customers for booking.
     * @returns a boolean
     */
    public get isHiddenFromCustomers() {
        return this._isHiddenFromCustomers;
    };
    /**
     * Sets the isHiddenFromCustomers property value. True means this service is not available to customers for booking.
     * @param value Value to set for the isHiddenFromCustomers property.
     */
    public set isHiddenFromCustomers(value: boolean | undefined) {
        this._isHiddenFromCustomers = value;
    };
    /**
     * Gets the isLocationOnline property value. True indicates that the appointments for the service will be held online. Default value is false.
     * @returns a boolean
     */
    public get isLocationOnline() {
        return this._isLocationOnline;
    };
    /**
     * Sets the isLocationOnline property value. True indicates that the appointments for the service will be held online. Default value is false.
     * @param value Value to set for the isLocationOnline property.
     */
    public set isLocationOnline(value: boolean | undefined) {
        this._isLocationOnline = value;
    };
    /**
     * Gets the maximumAttendeesCount property value. The maximum number of customers allowed in a service. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment.  To create a customer, use the Create bookingCustomer operation.
     * @returns a integer
     */
    public get maximumAttendeesCount() {
        return this._maximumAttendeesCount;
    };
    /**
     * Sets the maximumAttendeesCount property value. The maximum number of customers allowed in a service. If maximumAttendeesCount of the service is greater than 1, pass valid customer IDs while creating or updating an appointment.  To create a customer, use the Create bookingCustomer operation.
     * @param value Value to set for the maximumAttendeesCount property.
     */
    public set maximumAttendeesCount(value: number | undefined) {
        this._maximumAttendeesCount = value;
    };
    /**
     * Gets the notes property value. Additional information about this service.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Additional information about this service.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Gets the postBuffer property value. The time to buffer after an appointment for this service ends, and before the next customer appointment can be booked.
     * @returns a Duration
     */
    public get postBuffer() {
        return this._postBuffer;
    };
    /**
     * Sets the postBuffer property value. The time to buffer after an appointment for this service ends, and before the next customer appointment can be booked.
     * @param value Value to set for the postBuffer property.
     */
    public set postBuffer(value: Duration | undefined) {
        this._postBuffer = value;
    };
    /**
     * Gets the preBuffer property value. The time to buffer before an appointment for this service can start.
     * @returns a Duration
     */
    public get preBuffer() {
        return this._preBuffer;
    };
    /**
     * Sets the preBuffer property value. The time to buffer before an appointment for this service can start.
     * @param value Value to set for the preBuffer property.
     */
    public set preBuffer(value: Duration | undefined) {
        this._preBuffer = value;
    };
    /**
     * Gets the schedulingPolicy property value. The set of policies that determine how appointments for this type of service should be created and managed.
     * @returns a admin
     */
    public get schedulingPolicy() {
        return this._schedulingPolicy;
    };
    /**
     * Sets the schedulingPolicy property value. The set of policies that determine how appointments for this type of service should be created and managed.
     * @param value Value to set for the schedulingPolicy property.
     */
    public set schedulingPolicy(value: BookingSchedulingPolicy | AdminMember1 | undefined) {
        this._schedulingPolicy = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("additionalInformation", this.additionalInformation);
        writer.writeObjectValue<BookingQuestionAssignment>("customQuestions", this.customQuestions);
        writer.writeDurationValue("defaultDuration", this.defaultDuration);
        writer.writeObjectValue<Location>("defaultLocation", this.defaultLocation);
        writer.writeNumberValue("defaultPrice", this.defaultPrice);
        writer.writeEnumValue<BookingPriceType>("defaultPriceType", this.defaultPriceType);
        writer.writeObjectValue<BookingReminder>("defaultReminders", this.defaultReminders);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isHiddenFromCustomers", this.isHiddenFromCustomers);
        writer.writeBooleanValue("isLocationOnline", this.isLocationOnline);
        writer.writeNumberValue("maximumAttendeesCount", this.maximumAttendeesCount);
        writer.writeStringValue("notes", this.notes);
        writer.writeDurationValue("postBuffer", this.postBuffer);
        writer.writeDurationValue("preBuffer", this.preBuffer);
        writer.writeObjectValue<BookingSchedulingPolicy>("schedulingPolicy", this.schedulingPolicy);
        writer.writeBooleanValue("smsNotificationsEnabled", this.smsNotificationsEnabled);
        writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", this.staffMemberIds);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the smsNotificationsEnabled property value. True indicates SMS notifications can be sent to the customers for the appointment of the service. Default value is false.
     * @returns a boolean
     */
    public get smsNotificationsEnabled() {
        return this._smsNotificationsEnabled;
    };
    /**
     * Sets the smsNotificationsEnabled property value. True indicates SMS notifications can be sent to the customers for the appointment of the service. Default value is false.
     * @param value Value to set for the smsNotificationsEnabled property.
     */
    public set smsNotificationsEnabled(value: boolean | undefined) {
        this._smsNotificationsEnabled = value;
    };
    /**
     * Gets the staffMemberIds property value. Represents those staff members who provide this service.
     * @returns a string
     */
    public get staffMemberIds() {
        return this._staffMemberIds;
    };
    /**
     * Sets the staffMemberIds property value. Represents those staff members who provide this service.
     * @param value Value to set for the staffMemberIds property.
     */
    public set staffMemberIds(value: string[] | undefined) {
        this._staffMemberIds = value;
    };
    /**
     * Gets the webUrl property value. The URL a customer uses to access the service.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The URL a customer uses to access the service.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
