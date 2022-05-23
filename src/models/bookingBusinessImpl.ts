import {BookingAppointment} from './bookingAppointment';
import {BookingBusiness} from './bookingBusiness';
import {BookingCustomerBase} from './bookingCustomerBase';
import {BookingCustomQuestion} from './bookingCustomQuestion';
import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {BookingService} from './bookingService';
import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {BookingWorkHours} from './bookingWorkHours';
import {createBookingAppointmentFromDiscriminatorValue} from './createBookingAppointmentFromDiscriminatorValue';
import {createBookingCustomerBaseFromDiscriminatorValue} from './createBookingCustomerBaseFromDiscriminatorValue';
import {createBookingCustomQuestionFromDiscriminatorValue} from './createBookingCustomQuestionFromDiscriminatorValue';
import {createBookingSchedulingPolicyFromDiscriminatorValue} from './createBookingSchedulingPolicyFromDiscriminatorValue';
import {createBookingServiceFromDiscriminatorValue} from './createBookingServiceFromDiscriminatorValue';
import {createBookingStaffMemberBaseFromDiscriminatorValue} from './createBookingStaffMemberBaseFromDiscriminatorValue';
import {createBookingWorkHoursFromDiscriminatorValue} from './createBookingWorkHoursFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {BookingAppointmentImpl, BookingCustomerBaseImpl, BookingCustomQuestionImpl, BookingSchedulingPolicyImpl, BookingServiceImpl, BookingStaffMemberBaseImpl, BookingWorkHoursImpl, EntityImpl, PhysicalAddressImpl} from './index';
import {PhysicalAddress} from './physicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents a Microsot Bookings Business. */
export class BookingBusinessImpl extends EntityImpl implements BookingBusiness, Parsable {
    /** The street address of the business. The address property, together with phone and webSiteUrl, appear in the footer of a business scheduling page. */
    public address?: PhysicalAddress | undefined;
    /** All the appointments of this business. Read-only. Nullable. */
    public appointments?: BookingAppointment[] | undefined;
    /** The hours of operation for the business. */
    public businessHours?: BookingWorkHours[] | undefined;
    /** The type of business. */
    public businessType?: string | undefined;
    /** The set of appointments of this business in a specified date range. Read-only. Nullable. */
    public calendarView?: BookingAppointment[] | undefined;
    /** All the customers of this business. Read-only. Nullable. */
    public customers?: BookingCustomerBase[] | undefined;
    /** All the custom questions of this business. Read-only. Nullable. */
    public customQuestions?: BookingCustomQuestion[] | undefined;
    /** The code for the currency that the business operates in on Microsoft Bookings. */
    public defaultCurrencyIso?: string | undefined;
    /** The name of the business, which interfaces with customers. This name appears at the top of the business scheduling page. */
    public displayName?: string | undefined;
    /** The email address for the business. */
    public email?: string | undefined;
    /** The scheduling page has been made available to external customers. Use the publish and unpublish actions to set this property. Read-only. */
    public isPublished?: boolean | undefined;
    /** The telephone number for the business. The phone property, together with address and webSiteUrl, appear in the footer of a business scheduling page. */
    public phone?: string | undefined;
    /** The URL for the scheduling page, which is set after you publish or unpublish the page. Read-only. */
    public publicUrl?: string | undefined;
    /** Specifies how bookings can be created for this business. */
    public schedulingPolicy?: BookingSchedulingPolicy | undefined;
    /** All the services offered by this business. Read-only. Nullable. */
    public services?: BookingService[] | undefined;
    /** All the staff members that provide services in this business. Read-only. Nullable. */
    public staffMembers?: BookingStaffMemberBase[] | undefined;
    /** The URL of the business web site. The webSiteUrl property, together with address, phone, appear in the footer of a business scheduling page. */
    public webSiteUrl?: string | undefined;
    /**
     * Instantiates a new bookingBusiness and sets the default values.
     * @param bookingBusinessParameterValue 
     */
    public constructor(bookingBusinessParameterValue?: BookingBusiness | undefined) {
        super();
        this.address = bookingBusinessParameterValue?.address ;
        this.appointments = bookingBusinessParameterValue?.appointments ;
        this.businessHours = bookingBusinessParameterValue?.businessHours ;
        this.businessType = bookingBusinessParameterValue?.businessType ;
        this.calendarView = bookingBusinessParameterValue?.calendarView ;
        this.customers = bookingBusinessParameterValue?.customers ;
        this.customQuestions = bookingBusinessParameterValue?.customQuestions ;
        this.defaultCurrencyIso = bookingBusinessParameterValue?.defaultCurrencyIso ;
        this.displayName = bookingBusinessParameterValue?.displayName ;
        this.email = bookingBusinessParameterValue?.email ;
        this.isPublished = bookingBusinessParameterValue?.isPublished ;
        this.phone = bookingBusinessParameterValue?.phone ;
        this.publicUrl = bookingBusinessParameterValue?.publicUrl ;
        this.schedulingPolicy = bookingBusinessParameterValue?.schedulingPolicy ;
        this.services = bookingBusinessParameterValue?.services ;
        this.staffMembers = bookingBusinessParameterValue?.staffMembers ;
        this.webSiteUrl = bookingBusinessParameterValue?.webSiteUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "address": n => { this.address = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "appointments": n => { this.appointments = n.getCollectionOfObjectValues<BookingAppointmentImpl>(createBookingAppointmentFromDiscriminatorValue); },
            "businessHours": n => { this.businessHours = n.getCollectionOfObjectValues<BookingWorkHoursImpl>(createBookingWorkHoursFromDiscriminatorValue); },
            "businessType": n => { this.businessType = n.getStringValue(); },
            "calendarView": n => { this.calendarView = n.getCollectionOfObjectValues<BookingAppointmentImpl>(createBookingAppointmentFromDiscriminatorValue); },
            "customers": n => { this.customers = n.getCollectionOfObjectValues<BookingCustomerBaseImpl>(createBookingCustomerBaseFromDiscriminatorValue); },
            "customQuestions": n => { this.customQuestions = n.getCollectionOfObjectValues<BookingCustomQuestionImpl>(createBookingCustomQuestionFromDiscriminatorValue); },
            "defaultCurrencyIso": n => { this.defaultCurrencyIso = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "email": n => { this.email = n.getStringValue(); },
            "isPublished": n => { this.isPublished = n.getBooleanValue(); },
            "phone": n => { this.phone = n.getStringValue(); },
            "publicUrl": n => { this.publicUrl = n.getStringValue(); },
            "schedulingPolicy": n => { this.schedulingPolicy = n.getObjectValue<BookingSchedulingPolicyImpl>(createBookingSchedulingPolicyFromDiscriminatorValue); },
            "services": n => { this.services = n.getCollectionOfObjectValues<BookingServiceImpl>(createBookingServiceFromDiscriminatorValue); },
            "staffMembers": n => { this.staffMembers = n.getCollectionOfObjectValues<BookingStaffMemberBaseImpl>(createBookingStaffMemberBaseFromDiscriminatorValue); },
            "webSiteUrl": n => { this.webSiteUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.address){
        writer.writeObjectValue<PhysicalAddressImpl>("address", new PhysicalAddressImpl(this.address));
        }
        if(this.appointments && this.appointments.length != 0){        const appointmentsArrValue: BookingAppointmentImpl[] = []; this.appointments?.forEach(element => {appointmentsArrValue.push(new BookingAppointmentImpl(element));});
        writer.writeCollectionOfObjectValues<BookingAppointmentImpl>("appointments", appointmentsArrValue);
        }
        if(this.businessHours && this.businessHours.length != 0){        const businessHoursArrValue: BookingWorkHoursImpl[] = []; this.businessHours?.forEach(element => {businessHoursArrValue.push(new BookingWorkHoursImpl(element));});
        writer.writeCollectionOfObjectValues<BookingWorkHoursImpl>("businessHours", businessHoursArrValue);
        }
        if(this.businessType){
        writer.writeStringValue("businessType", this.businessType);
        }
        if(this.calendarView && this.calendarView.length != 0){        const calendarViewArrValue: BookingAppointmentImpl[] = []; this.calendarView?.forEach(element => {calendarViewArrValue.push(new BookingAppointmentImpl(element));});
        writer.writeCollectionOfObjectValues<BookingAppointmentImpl>("calendarView", calendarViewArrValue);
        }
        if(this.customers && this.customers.length != 0){        const customersArrValue: BookingCustomerBaseImpl[] = []; this.customers?.forEach(element => {customersArrValue.push(new BookingCustomerBaseImpl(element));});
        writer.writeCollectionOfObjectValues<BookingCustomerBaseImpl>("customers", customersArrValue);
        }
        if(this.customQuestions && this.customQuestions.length != 0){        const customQuestionsArrValue: BookingCustomQuestionImpl[] = []; this.customQuestions?.forEach(element => {customQuestionsArrValue.push(new BookingCustomQuestionImpl(element));});
        writer.writeCollectionOfObjectValues<BookingCustomQuestionImpl>("customQuestions", customQuestionsArrValue);
        }
        if(this.defaultCurrencyIso){
        writer.writeStringValue("defaultCurrencyIso", this.defaultCurrencyIso);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.email){
        writer.writeStringValue("email", this.email);
        }
        if(this.isPublished){
        writer.writeBooleanValue("isPublished", this.isPublished);
        }
        if(this.phone){
        writer.writeStringValue("phone", this.phone);
        }
        if(this.publicUrl){
        writer.writeStringValue("publicUrl", this.publicUrl);
        }
        if(this.schedulingPolicy){
        writer.writeObjectValue<BookingSchedulingPolicyImpl>("schedulingPolicy", new BookingSchedulingPolicyImpl(this.schedulingPolicy));
        }
        if(this.services && this.services.length != 0){        const servicesArrValue: BookingServiceImpl[] = []; this.services?.forEach(element => {servicesArrValue.push(new BookingServiceImpl(element));});
        writer.writeCollectionOfObjectValues<BookingServiceImpl>("services", servicesArrValue);
        }
        if(this.staffMembers && this.staffMembers.length != 0){        const staffMembersArrValue: BookingStaffMemberBaseImpl[] = []; this.staffMembers?.forEach(element => {staffMembersArrValue.push(new BookingStaffMemberBaseImpl(element));});
        writer.writeCollectionOfObjectValues<BookingStaffMemberBaseImpl>("staffMembers", staffMembersArrValue);
        }
        if(this.webSiteUrl){
        writer.writeStringValue("webSiteUrl", this.webSiteUrl);
        }
    };
}
