import {BookingStaffMember} from './bookingStaffMember';
import {BookingStaffRole} from './bookingStaffRole';
import {BookingWorkHours} from './bookingWorkHours';
import {createBookingWorkHoursFromDiscriminatorValue} from './createBookingWorkHoursFromDiscriminatorValue';
import {BookingStaffMemberBaseImpl, BookingWorkHoursImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingStaffMemberImpl extends BookingStaffMemberBaseImpl implements BookingStaffMember {
    /** True means that if the staff member is a Microsoft 365 user, the Bookings API would verify the staff member's availability in their personal calendar in Microsoft 365, before making a booking. */
    public availabilityIsAffectedByPersonalCalendar?: boolean | undefined;
    /** The name of the staff member, as displayed to customers. Required. */
    public displayName?: string | undefined;
    /** The email address of the staff member. This can be in the same Microsoft 365 tenant as the business, or in a different email domain. This email address can be used if the sendConfirmationsToOwner property is set to true in the scheduling policy of the business. Required. */
    public emailAddress?: string | undefined;
    /** The role of the staff member in the business. Possible values are: guest, administrator, viewer, externalGuest, unknownFutureValue, scheduler and member. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: scheduler, member. Required. */
    public role?: BookingStaffRole | undefined;
    /** The time zone of the staff member. For a list of possible values, see dateTimeTimeZone. */
    public timeZone?: string | undefined;
    /** True means the staff member's availability is as specified in the businessHours property of the business. False means the availability is determined by the staff member's workingHours property setting. */
    public useBusinessHours?: boolean | undefined;
    /** The range of hours each day of the week that the staff member is available for booking. By default, they are initialized to be the same as the businessHours property of the business. */
    public workingHours?: BookingWorkHours[] | undefined;
    /**
     * Instantiates a new BookingStaffMember and sets the default values.
     * @param bookingStaffMemberParameterValue 
     */
    public constructor(bookingStaffMemberParameterValue?: BookingStaffMember | undefined) {
        super(bookingStaffMemberParameterValue);
        this.availabilityIsAffectedByPersonalCalendar = bookingStaffMemberParameterValue?.availabilityIsAffectedByPersonalCalendar;
        this.displayName = bookingStaffMemberParameterValue?.displayName;
        this.emailAddress = bookingStaffMemberParameterValue?.emailAddress;
        this.role = bookingStaffMemberParameterValue?.role;
        this.timeZone = bookingStaffMemberParameterValue?.timeZone;
        this.useBusinessHours = bookingStaffMemberParameterValue?.useBusinessHours;
        const workingHoursArrValue: BookingWorkHoursImpl[] = []; bookingStaffMemberParameterValue.workingHours?.forEach(element => {workingHoursArrValue.push(element instanceof BookingWorkHoursImpl? element : new BookingWorkHoursImpl(element));});
        this.workingHours = workingHoursArrValue;
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
            "workingHours": n => { this.workingHours = n.getCollectionOfObjectValues<BookingWorkHoursImpl>(createBookingWorkHoursFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.availabilityIsAffectedByPersonalCalendar){
            writer.writeBooleanValue("availabilityIsAffectedByPersonalCalendar", this.availabilityIsAffectedByPersonalCalendar);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.emailAddress){
            writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.role){
            writer.writeEnumValue<BookingStaffRole>("role", this.role);
        }
        if(this.timeZone){
            writer.writeStringValue("timeZone", this.timeZone);
        }
        if(this.useBusinessHours){
            writer.writeBooleanValue("useBusinessHours", this.useBusinessHours);
        }
        if(this.workingHours && this.workingHours.length != 0){        const workingHoursArrValue: BookingWorkHoursImpl[] = []; this.workingHours?.forEach(element => {workingHoursArrValue.push(element instanceof BookingWorkHoursImpl? element : new BookingWorkHoursImpl(element));});
            writer.writeCollectionOfObjectValues<BookingWorkHoursImpl>("workingHours", workingHoursArrValue);
        }
    };
}
