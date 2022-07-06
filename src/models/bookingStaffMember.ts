import {BookingStaffRole} from './bookingStaffRole';
import {createBookingWorkHoursFromDiscriminatorValue} from './createBookingWorkHoursFromDiscriminatorValue';
import {BookingStaffMemberBase, BookingWorkHours} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingStaffMember extends BookingStaffMemberBase implements Parsable {
    /** True means that if the staff member is a Microsoft 365 user, the Bookings API would verify the staff member's availability in their personal calendar in Microsoft 365, before making a booking. */
    private _availabilityIsAffectedByPersonalCalendar?: boolean | undefined;
    /** The name of the staff member, as displayed to customers. Required. */
    private _displayName?: string | undefined;
    /** The email address of the staff member. This can be in the same Microsoft 365 tenant as the business, or in a different email domain. This email address can be used if the sendConfirmationsToOwner property is set to true in the scheduling policy of the business. Required. */
    private _emailAddress?: string | undefined;
    /** The role of the staff member in the business. Possible values are: guest, administrator, viewer, externalGuest, unknownFutureValue, scheduler and member. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: scheduler, member. Required. */
    private _role?: BookingStaffRole | undefined;
    /** The time zone of the staff member. For a list of possible values, see dateTimeTimeZone. */
    private _timeZone?: string | undefined;
    /** True means the staff member's availability is as specified in the businessHours property of the business. False means the availability is determined by the staff member's workingHours property setting. */
    private _useBusinessHours?: boolean | undefined;
    /** The range of hours each day of the week that the staff member is available for booking. By default, they are initialized to be the same as the businessHours property of the business. */
    private _workingHours?: BookingWorkHours[] | undefined;
    /**
     * Gets the availabilityIsAffectedByPersonalCalendar property value. True means that if the staff member is a Microsoft 365 user, the Bookings API would verify the staff member's availability in their personal calendar in Microsoft 365, before making a booking.
     * @returns a boolean
     */
    public get availabilityIsAffectedByPersonalCalendar() {
        return this._availabilityIsAffectedByPersonalCalendar;
    };
    /**
     * Sets the availabilityIsAffectedByPersonalCalendar property value. True means that if the staff member is a Microsoft 365 user, the Bookings API would verify the staff member's availability in their personal calendar in Microsoft 365, before making a booking.
     * @param value Value to set for the availabilityIsAffectedByPersonalCalendar property.
     */
    public set availabilityIsAffectedByPersonalCalendar(value: boolean | undefined) {
        this._availabilityIsAffectedByPersonalCalendar = value;
    };
    /**
     * Instantiates a new BookingStaffMember and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name of the staff member, as displayed to customers. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the staff member, as displayed to customers. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the emailAddress property value. The email address of the staff member. This can be in the same Microsoft 365 tenant as the business, or in a different email domain. This email address can be used if the sendConfirmationsToOwner property is set to true in the scheduling policy of the business. Required.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The email address of the staff member. This can be in the same Microsoft 365 tenant as the business, or in a different email domain. This email address can be used if the sendConfirmationsToOwner property is set to true in the scheduling policy of the business. Required.
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
            "availabilityIsAffectedByPersonalCalendar": n => { this.availabilityIsAffectedByPersonalCalendar = n.getBooleanValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "role": n => { this.role = n.getEnumValue<BookingStaffRole>(BookingStaffRole); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
            "useBusinessHours": n => { this.useBusinessHours = n.getBooleanValue(); },
            "workingHours": n => { this.workingHours = n.getCollectionOfObjectValues<BookingWorkHours>(createBookingWorkHoursFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the role property value. The role of the staff member in the business. Possible values are: guest, administrator, viewer, externalGuest, unknownFutureValue, scheduler and member. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: scheduler, member. Required.
     * @returns a bookingStaffRole
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. The role of the staff member in the business. Possible values are: guest, administrator, viewer, externalGuest, unknownFutureValue, scheduler and member. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: scheduler, member. Required.
     * @param value Value to set for the role property.
     */
    public set role(value: BookingStaffRole | undefined) {
        this._role = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("availabilityIsAffectedByPersonalCalendar", this.availabilityIsAffectedByPersonalCalendar);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeEnumValue<BookingStaffRole>("role", this.role);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeBooleanValue("useBusinessHours", this.useBusinessHours);
        writer.writeCollectionOfObjectValues<BookingWorkHours>("workingHours", this.workingHours);
    };
    /**
     * Gets the timeZone property value. The time zone of the staff member. For a list of possible values, see dateTimeTimeZone.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. The time zone of the staff member. For a list of possible values, see dateTimeTimeZone.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
    /**
     * Gets the useBusinessHours property value. True means the staff member's availability is as specified in the businessHours property of the business. False means the availability is determined by the staff member's workingHours property setting.
     * @returns a boolean
     */
    public get useBusinessHours() {
        return this._useBusinessHours;
    };
    /**
     * Sets the useBusinessHours property value. True means the staff member's availability is as specified in the businessHours property of the business. False means the availability is determined by the staff member's workingHours property setting.
     * @param value Value to set for the useBusinessHours property.
     */
    public set useBusinessHours(value: boolean | undefined) {
        this._useBusinessHours = value;
    };
    /**
     * Gets the workingHours property value. The range of hours each day of the week that the staff member is available for booking. By default, they are initialized to be the same as the businessHours property of the business.
     * @returns a bookingWorkHours
     */
    public get workingHours() {
        return this._workingHours;
    };
    /**
     * Sets the workingHours property value. The range of hours each day of the week that the staff member is available for booking. By default, they are initialized to be the same as the businessHours property of the business.
     * @param value Value to set for the workingHours property.
     */
    public set workingHours(value: BookingWorkHours[] | undefined) {
        this._workingHours = value;
    };
}
