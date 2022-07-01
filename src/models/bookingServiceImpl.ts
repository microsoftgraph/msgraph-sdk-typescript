import {BookingPriceType} from './bookingPriceType';
import {BookingQuestionAssignment} from './bookingQuestionAssignment';
import {BookingReminder} from './bookingReminder';
import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {BookingService} from './bookingService';
import {createBookingQuestionAssignmentFromDiscriminatorValue} from './createBookingQuestionAssignmentFromDiscriminatorValue';
import {createBookingReminderFromDiscriminatorValue} from './createBookingReminderFromDiscriminatorValue';
import {createBookingSchedulingPolicyFromDiscriminatorValue} from './createBookingSchedulingPolicyFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {BookingQuestionAssignmentImpl, BookingReminderImpl, BookingSchedulingPolicyImpl, EntityImpl, LocationImpl} from './index';
import {Location} from './location';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a particular service offered by a booking business. */
export class BookingServiceImpl extends EntityImpl implements BookingService {
    /** Additional information that is sent to the customer when an appointment is confirmed. */
    private _additionalInformation?: string | undefined;
    /** Contains the set of custom questions associated with a particular service. */
    private _customQuestions?: BookingQuestionAssignment[] | undefined;
    /** The default length of the service, represented in numbers of days, hours, minutes, and seconds. For example, P11D23H59M59.999999999999S. */
    private _defaultDuration?: Duration | undefined;
    /** The default physical location for the service. */
    private _defaultLocation?: Location | undefined;
    /** The default monetary price for the service. */
    private _defaultPrice?: number | undefined;
    /** The default way the service is charged. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue. */
    private _defaultPriceType?: BookingPriceType | undefined;
    /** The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID. */
    private _defaultReminders?: BookingReminder[] | undefined;
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
    private _schedulingPolicy?: BookingSchedulingPolicy | undefined;
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
        if(value) {
            this._additionalInformation = value;
        }
    };
    /**
     * Instantiates a new bookingService and sets the default values.
     * @param bookingServiceParameterValue 
     */
    public constructor(bookingServiceParameterValue?: BookingService | undefined) {
        super(bookingServiceParameterValue);
        this._additionalInformation = bookingServiceParameterValue?.additionalInformation;
        this._customQuestions = bookingServiceParameterValue?.customQuestions;
        this._defaultDuration = bookingServiceParameterValue?.defaultDuration;
        this._defaultLocation = bookingServiceParameterValue?.defaultLocation;
        this._defaultPrice = bookingServiceParameterValue?.defaultPrice;
        this._defaultPriceType = bookingServiceParameterValue?.defaultPriceType;
        this._defaultReminders = bookingServiceParameterValue?.defaultReminders;
        this._description = bookingServiceParameterValue?.description;
        this._displayName = bookingServiceParameterValue?.displayName;
        this._isHiddenFromCustomers = bookingServiceParameterValue?.isHiddenFromCustomers;
        this._isLocationOnline = bookingServiceParameterValue?.isLocationOnline;
        this._maximumAttendeesCount = bookingServiceParameterValue?.maximumAttendeesCount;
        this._notes = bookingServiceParameterValue?.notes;
        this._postBuffer = bookingServiceParameterValue?.postBuffer;
        this._preBuffer = bookingServiceParameterValue?.preBuffer;
        this._schedulingPolicy = bookingServiceParameterValue?.schedulingPolicy;
        this._smsNotificationsEnabled = bookingServiceParameterValue?.smsNotificationsEnabled;
        this._staffMemberIds = bookingServiceParameterValue?.staffMemberIds;
        this._webUrl = bookingServiceParameterValue?.webUrl;
    };
    /**
     * Gets the customQuestions property value. Contains the set of custom questions associated with a particular service.
     * @returns a BookingQuestionAssignmentInterface
     */
    public get customQuestions() {
        return this._customQuestions;
    };
    /**
     * Sets the customQuestions property value. Contains the set of custom questions associated with a particular service.
     * @param value Value to set for the customQuestions property.
     */
    public set customQuestions(value: BookingQuestionAssignment[] | undefined) {
        if(value) {
            const customQuestionsArrValue: BookingQuestionAssignmentImpl[] = [];
            this.customQuestions?.forEach(element => {
                customQuestionsArrValue.push((element instanceof BookingQuestionAssignmentImpl? element as BookingQuestionAssignmentImpl:new BookingQuestionAssignmentImpl(element)));
            });
            this._customQuestions = customQuestionsArrValue;
        }
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
        if(value) {
            this._defaultDuration = value;
        }
    };
    /**
     * Gets the defaultLocation property value. The default physical location for the service.
     * @returns a LocationInterface
     */
    public get defaultLocation() {
        return this._defaultLocation;
    };
    /**
     * Sets the defaultLocation property value. The default physical location for the service.
     * @param value Value to set for the defaultLocation property.
     */
    public set defaultLocation(value: Location | undefined) {
        if(value) {
            this._defaultLocation = value instanceof LocationImpl? value as LocationImpl: new LocationImpl(value);
        }
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
        if(value) {
            this._defaultPrice = value;
        }
    };
    /**
     * Gets the defaultPriceType property value. The default way the service is charged. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue.
     * @returns a bookingPriceType
     */
    public get defaultPriceType() {
        return this._defaultPriceType;
    };
    /**
     * Sets the defaultPriceType property value. The default way the service is charged. Possible values are: undefined, fixedPrice, startingAt, hourly, free, priceVaries, callUs, notSet, unknownFutureValue.
     * @param value Value to set for the defaultPriceType property.
     */
    public set defaultPriceType(value: BookingPriceType | undefined) {
        if(value) {
            this._defaultPriceType = value;
        }
    };
    /**
     * Gets the defaultReminders property value. The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID.
     * @returns a BookingReminderInterface
     */
    public get defaultReminders() {
        return this._defaultReminders;
    };
    /**
     * Sets the defaultReminders property value. The default set of reminders for an appointment of this service. The value of this property is available only when reading this bookingService by its ID.
     * @param value Value to set for the defaultReminders property.
     */
    public set defaultReminders(value: BookingReminder[] | undefined) {
        if(value) {
            const defaultRemindersArrValue: BookingReminderImpl[] = [];
            this.defaultReminders?.forEach(element => {
                defaultRemindersArrValue.push((element instanceof BookingReminderImpl? element as BookingReminderImpl:new BookingReminderImpl(element)));
            });
            this._defaultReminders = defaultRemindersArrValue;
        }
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
        if(value) {
            this._description = value;
        }
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalInformation": n => { this.additionalInformation = n.getStringValue(); },
            "customQuestions": n => { this.customQuestions = n.getCollectionOfObjectValues<BookingQuestionAssignmentImpl>(createBookingQuestionAssignmentFromDiscriminatorValue); },
            "defaultDuration": n => { this.defaultDuration = n.getDurationValue(); },
            "defaultLocation": n => { this.defaultLocation = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "defaultPrice": n => { this.defaultPrice = n.getNumberValue(); },
            "defaultPriceType": n => { this.defaultPriceType = n.getEnumValue<BookingPriceType>(BookingPriceType); },
            "defaultReminders": n => { this.defaultReminders = n.getCollectionOfObjectValues<BookingReminderImpl>(createBookingReminderFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isHiddenFromCustomers": n => { this.isHiddenFromCustomers = n.getBooleanValue(); },
            "isLocationOnline": n => { this.isLocationOnline = n.getBooleanValue(); },
            "maximumAttendeesCount": n => { this.maximumAttendeesCount = n.getNumberValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "postBuffer": n => { this.postBuffer = n.getDurationValue(); },
            "preBuffer": n => { this.preBuffer = n.getDurationValue(); },
            "schedulingPolicy": n => { this.schedulingPolicy = n.getObjectValue<BookingSchedulingPolicyImpl>(createBookingSchedulingPolicyFromDiscriminatorValue); },
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
        if(value) {
            this._isHiddenFromCustomers = value;
        }
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
        if(value) {
            this._isLocationOnline = value;
        }
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
        if(value) {
            this._maximumAttendeesCount = value;
        }
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
        if(value) {
            this._notes = value;
        }
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
        if(value) {
            this._postBuffer = value;
        }
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
        if(value) {
            this._preBuffer = value;
        }
    };
    /**
     * Gets the schedulingPolicy property value. The set of policies that determine how appointments for this type of service should be created and managed.
     * @returns a BookingSchedulingPolicyInterface
     */
    public get schedulingPolicy() {
        return this._schedulingPolicy;
    };
    /**
     * Sets the schedulingPolicy property value. The set of policies that determine how appointments for this type of service should be created and managed.
     * @param value Value to set for the schedulingPolicy property.
     */
    public set schedulingPolicy(value: BookingSchedulingPolicy | undefined) {
        if(value) {
            this._schedulingPolicy = value instanceof BookingSchedulingPolicyImpl? value as BookingSchedulingPolicyImpl: new BookingSchedulingPolicyImpl(value);
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
        if(this.customQuestions && this.customQuestions.length != 0){        const customQuestionsArrValue: BookingQuestionAssignmentImpl[] = [];
        this.customQuestions?.forEach(element => {
            customQuestionsArrValue.push((element instanceof BookingQuestionAssignmentImpl? element as BookingQuestionAssignmentImpl:new BookingQuestionAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingQuestionAssignmentImpl>("customQuestions", customQuestionsArrValue);
        }
        if(this.defaultDuration){
            writer.writeDurationValue("defaultDuration", this.defaultDuration);
        }
        if(this.defaultLocation){
            writer.writeObjectValue<LocationImpl>("defaultLocation", (this.defaultLocation instanceof LocationImpl? this.defaultLocation as LocationImpl: new LocationImpl(this.defaultLocation)));
        }
        if(this.defaultPrice){
            writer.writeNumberValue("defaultPrice", this.defaultPrice);
        }
        if(this.defaultPriceType){
            writer.writeEnumValue<BookingPriceType>("defaultPriceType", this.defaultPriceType);
        }
        if(this.defaultReminders && this.defaultReminders.length != 0){        const defaultRemindersArrValue: BookingReminderImpl[] = [];
        this.defaultReminders?.forEach(element => {
            defaultRemindersArrValue.push((element instanceof BookingReminderImpl? element as BookingReminderImpl:new BookingReminderImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingReminderImpl>("defaultReminders", defaultRemindersArrValue);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isHiddenFromCustomers){
            writer.writeBooleanValue("isHiddenFromCustomers", this.isHiddenFromCustomers);
        }
        if(this.isLocationOnline){
            writer.writeBooleanValue("isLocationOnline", this.isLocationOnline);
        }
        if(this.maximumAttendeesCount){
            writer.writeNumberValue("maximumAttendeesCount", this.maximumAttendeesCount);
        }
        if(this.notes){
            writer.writeStringValue("notes", this.notes);
        }
        if(this.postBuffer){
            writer.writeDurationValue("postBuffer", this.postBuffer);
        }
        if(this.preBuffer){
            writer.writeDurationValue("preBuffer", this.preBuffer);
        }
        if(this.schedulingPolicy){
            writer.writeObjectValue<BookingSchedulingPolicyImpl>("schedulingPolicy", (this.schedulingPolicy instanceof BookingSchedulingPolicyImpl? this.schedulingPolicy as BookingSchedulingPolicyImpl: new BookingSchedulingPolicyImpl(this.schedulingPolicy)));
        }
        if(this.smsNotificationsEnabled){
            writer.writeBooleanValue("smsNotificationsEnabled", this.smsNotificationsEnabled);
        }
        if(this.staffMemberIds){
            writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", this.staffMemberIds);
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
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
        if(value) {
            this._smsNotificationsEnabled = value;
        }
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
        if(value) {
            this._staffMemberIds = value;
        }
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
        if(value) {
            this._webUrl = value;
        }
    };
}
