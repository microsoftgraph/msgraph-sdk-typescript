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
export class BookingBusinessImpl extends EntityImpl implements BookingBusiness {
    /** The street address of the business. The address property, together with phone and webSiteUrl, appear in the footer of a business scheduling page. */
    private _address?: PhysicalAddress | undefined;
    /** All the appointments of this business. Read-only. Nullable. */
    private _appointments?: BookingAppointment[] | undefined;
    /** The hours of operation for the business. */
    private _businessHours?: BookingWorkHours[] | undefined;
    /** The type of business. */
    private _businessType?: string | undefined;
    /** The set of appointments of this business in a specified date range. Read-only. Nullable. */
    private _calendarView?: BookingAppointment[] | undefined;
    /** All the customers of this business. Read-only. Nullable. */
    private _customers?: BookingCustomerBase[] | undefined;
    /** All the custom questions of this business. Read-only. Nullable. */
    private _customQuestions?: BookingCustomQuestion[] | undefined;
    /** The code for the currency that the business operates in on Microsoft Bookings. */
    private _defaultCurrencyIso?: string | undefined;
    /** The name of the business, which interfaces with customers. This name appears at the top of the business scheduling page. */
    private _displayName?: string | undefined;
    /** The email address for the business. */
    private _email?: string | undefined;
    /** The scheduling page has been made available to external customers. Use the publish and unpublish actions to set this property. Read-only. */
    private _isPublished?: boolean | undefined;
    /** The telephone number for the business. The phone property, together with address and webSiteUrl, appear in the footer of a business scheduling page. */
    private _phone?: string | undefined;
    /** The URL for the scheduling page, which is set after you publish or unpublish the page. Read-only. */
    private _publicUrl?: string | undefined;
    /** Specifies how bookings can be created for this business. */
    private _schedulingPolicy?: BookingSchedulingPolicy | undefined;
    /** All the services offered by this business. Read-only. Nullable. */
    private _services?: BookingService[] | undefined;
    /** All the staff members that provide services in this business. Read-only. Nullable. */
    private _staffMembers?: BookingStaffMemberBase[] | undefined;
    /** The URL of the business web site. The webSiteUrl property, together with address, phone, appear in the footer of a business scheduling page. */
    private _webSiteUrl?: string | undefined;
    /**
     * Gets the address property value. The street address of the business. The address property, together with phone and webSiteUrl, appear in the footer of a business scheduling page.
     * @returns a PhysicalAddressInterface
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The street address of the business. The address property, together with phone and webSiteUrl, appear in the footer of a business scheduling page.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        if(value) {
            this._address = value instanceof PhysicalAddressImpl? value as PhysicalAddressImpl: new PhysicalAddressImpl(value);
        }
    };
    /**
     * Gets the appointments property value. All the appointments of this business. Read-only. Nullable.
     * @returns a BookingAppointmentInterface
     */
    public get appointments() {
        return this._appointments;
    };
    /**
     * Sets the appointments property value. All the appointments of this business. Read-only. Nullable.
     * @param value Value to set for the appointments property.
     */
    public set appointments(value: BookingAppointment[] | undefined) {
        if(value) {
            const appointmentsArrValue: BookingAppointmentImpl[] = [];
            this.appointments?.forEach(element => {
                appointmentsArrValue.push((element instanceof BookingAppointmentImpl? element as BookingAppointmentImpl:new BookingAppointmentImpl(element)));
            });
            this._appointments = appointmentsArrValue;
        }
    };
    /**
     * Gets the businessHours property value. The hours of operation for the business.
     * @returns a BookingWorkHoursInterface
     */
    public get businessHours() {
        return this._businessHours;
    };
    /**
     * Sets the businessHours property value. The hours of operation for the business.
     * @param value Value to set for the businessHours property.
     */
    public set businessHours(value: BookingWorkHours[] | undefined) {
        if(value) {
            const businessHoursArrValue: BookingWorkHoursImpl[] = [];
            this.businessHours?.forEach(element => {
                businessHoursArrValue.push((element instanceof BookingWorkHoursImpl? element as BookingWorkHoursImpl:new BookingWorkHoursImpl(element)));
            });
            this._businessHours = businessHoursArrValue;
        }
    };
    /**
     * Gets the businessType property value. The type of business.
     * @returns a string
     */
    public get businessType() {
        return this._businessType;
    };
    /**
     * Sets the businessType property value. The type of business.
     * @param value Value to set for the businessType property.
     */
    public set businessType(value: string | undefined) {
        if(value) {
            this._businessType = value;
        }
    };
    /**
     * Gets the calendarView property value. The set of appointments of this business in a specified date range. Read-only. Nullable.
     * @returns a BookingAppointmentInterface
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The set of appointments of this business in a specified date range. Read-only. Nullable.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: BookingAppointment[] | undefined) {
        if(value) {
            const calendarViewArrValue: BookingAppointmentImpl[] = [];
            this.calendarView?.forEach(element => {
                calendarViewArrValue.push((element instanceof BookingAppointmentImpl? element as BookingAppointmentImpl:new BookingAppointmentImpl(element)));
            });
            this._calendarView = calendarViewArrValue;
        }
    };
    /**
     * Instantiates a new bookingBusiness and sets the default values.
     * @param bookingBusinessParameterValue 
     */
    public constructor(bookingBusinessParameterValue?: BookingBusiness | undefined) {
        super(bookingBusinessParameterValue);
        this._address = bookingBusinessParameterValue?.address;
        this._appointments = bookingBusinessParameterValue?.appointments;
        this._businessHours = bookingBusinessParameterValue?.businessHours;
        this._businessType = bookingBusinessParameterValue?.businessType;
        this._calendarView = bookingBusinessParameterValue?.calendarView;
        this._customers = bookingBusinessParameterValue?.customers;
        this._customQuestions = bookingBusinessParameterValue?.customQuestions;
        this._defaultCurrencyIso = bookingBusinessParameterValue?.defaultCurrencyIso;
        this._displayName = bookingBusinessParameterValue?.displayName;
        this._email = bookingBusinessParameterValue?.email;
        this._isPublished = bookingBusinessParameterValue?.isPublished;
        this._phone = bookingBusinessParameterValue?.phone;
        this._publicUrl = bookingBusinessParameterValue?.publicUrl;
        this._schedulingPolicy = bookingBusinessParameterValue?.schedulingPolicy;
        this._services = bookingBusinessParameterValue?.services;
        this._staffMembers = bookingBusinessParameterValue?.staffMembers;
        this._webSiteUrl = bookingBusinessParameterValue?.webSiteUrl;
    };
    /**
     * Gets the customers property value. All the customers of this business. Read-only. Nullable.
     * @returns a BookingCustomerBaseInterface
     */
    public get customers() {
        return this._customers;
    };
    /**
     * Sets the customers property value. All the customers of this business. Read-only. Nullable.
     * @param value Value to set for the customers property.
     */
    public set customers(value: BookingCustomerBase[] | undefined) {
        if(value) {
            const customersArrValue: BookingCustomerBaseImpl[] = [];
            this.customers?.forEach(element => {
                customersArrValue.push((element instanceof BookingCustomerBaseImpl? element as BookingCustomerBaseImpl:new BookingCustomerBaseImpl(element)));
            });
            this._customers = customersArrValue;
        }
    };
    /**
     * Gets the customQuestions property value. All the custom questions of this business. Read-only. Nullable.
     * @returns a BookingCustomQuestionInterface
     */
    public get customQuestions() {
        return this._customQuestions;
    };
    /**
     * Sets the customQuestions property value. All the custom questions of this business. Read-only. Nullable.
     * @param value Value to set for the customQuestions property.
     */
    public set customQuestions(value: BookingCustomQuestion[] | undefined) {
        if(value) {
            const customQuestionsArrValue: BookingCustomQuestionImpl[] = [];
            this.customQuestions?.forEach(element => {
                customQuestionsArrValue.push((element instanceof BookingCustomQuestionImpl? element as BookingCustomQuestionImpl:new BookingCustomQuestionImpl(element)));
            });
            this._customQuestions = customQuestionsArrValue;
        }
    };
    /**
     * Gets the defaultCurrencyIso property value. The code for the currency that the business operates in on Microsoft Bookings.
     * @returns a string
     */
    public get defaultCurrencyIso() {
        return this._defaultCurrencyIso;
    };
    /**
     * Sets the defaultCurrencyIso property value. The code for the currency that the business operates in on Microsoft Bookings.
     * @param value Value to set for the defaultCurrencyIso property.
     */
    public set defaultCurrencyIso(value: string | undefined) {
        if(value) {
            this._defaultCurrencyIso = value;
        }
    };
    /**
     * Gets the displayName property value. The name of the business, which interfaces with customers. This name appears at the top of the business scheduling page.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the business, which interfaces with customers. This name appears at the top of the business scheduling page.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the email property value. The email address for the business.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. The email address for the business.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        if(value) {
            this._email = value;
        }
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
     * Gets the isPublished property value. The scheduling page has been made available to external customers. Use the publish and unpublish actions to set this property. Read-only.
     * @returns a boolean
     */
    public get isPublished() {
        return this._isPublished;
    };
    /**
     * Sets the isPublished property value. The scheduling page has been made available to external customers. Use the publish and unpublish actions to set this property. Read-only.
     * @param value Value to set for the isPublished property.
     */
    public set isPublished(value: boolean | undefined) {
        if(value) {
            this._isPublished = value;
        }
    };
    /**
     * Gets the phone property value. The telephone number for the business. The phone property, together with address and webSiteUrl, appear in the footer of a business scheduling page.
     * @returns a string
     */
    public get phone() {
        return this._phone;
    };
    /**
     * Sets the phone property value. The telephone number for the business. The phone property, together with address and webSiteUrl, appear in the footer of a business scheduling page.
     * @param value Value to set for the phone property.
     */
    public set phone(value: string | undefined) {
        if(value) {
            this._phone = value;
        }
    };
    /**
     * Gets the publicUrl property value. The URL for the scheduling page, which is set after you publish or unpublish the page. Read-only.
     * @returns a string
     */
    public get publicUrl() {
        return this._publicUrl;
    };
    /**
     * Sets the publicUrl property value. The URL for the scheduling page, which is set after you publish or unpublish the page. Read-only.
     * @param value Value to set for the publicUrl property.
     */
    public set publicUrl(value: string | undefined) {
        if(value) {
            this._publicUrl = value;
        }
    };
    /**
     * Gets the schedulingPolicy property value. Specifies how bookings can be created for this business.
     * @returns a BookingSchedulingPolicyInterface
     */
    public get schedulingPolicy() {
        return this._schedulingPolicy;
    };
    /**
     * Sets the schedulingPolicy property value. Specifies how bookings can be created for this business.
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
        if(this.address){
            writer.writeObjectValue<PhysicalAddressImpl>("address", (this.address instanceof PhysicalAddressImpl? this.address as PhysicalAddressImpl: new PhysicalAddressImpl(this.address)));
        }
        if(this.appointments && this.appointments.length != 0){        const appointmentsArrValue: BookingAppointmentImpl[] = [];
        this.appointments?.forEach(element => {
            appointmentsArrValue.push((element instanceof BookingAppointmentImpl? element as BookingAppointmentImpl:new BookingAppointmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingAppointmentImpl>("appointments", appointmentsArrValue);
        }
        if(this.businessHours && this.businessHours.length != 0){        const businessHoursArrValue: BookingWorkHoursImpl[] = [];
        this.businessHours?.forEach(element => {
            businessHoursArrValue.push((element instanceof BookingWorkHoursImpl? element as BookingWorkHoursImpl:new BookingWorkHoursImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingWorkHoursImpl>("businessHours", businessHoursArrValue);
        }
        if(this.businessType){
            writer.writeStringValue("businessType", this.businessType);
        }
        if(this.calendarView && this.calendarView.length != 0){        const calendarViewArrValue: BookingAppointmentImpl[] = [];
        this.calendarView?.forEach(element => {
            calendarViewArrValue.push((element instanceof BookingAppointmentImpl? element as BookingAppointmentImpl:new BookingAppointmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingAppointmentImpl>("calendarView", calendarViewArrValue);
        }
        if(this.customers && this.customers.length != 0){        const customersArrValue: BookingCustomerBaseImpl[] = [];
        this.customers?.forEach(element => {
            customersArrValue.push((element instanceof BookingCustomerBaseImpl? element as BookingCustomerBaseImpl:new BookingCustomerBaseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingCustomerBaseImpl>("customers", customersArrValue);
        }
        if(this.customQuestions && this.customQuestions.length != 0){        const customQuestionsArrValue: BookingCustomQuestionImpl[] = [];
        this.customQuestions?.forEach(element => {
            customQuestionsArrValue.push((element instanceof BookingCustomQuestionImpl? element as BookingCustomQuestionImpl:new BookingCustomQuestionImpl(element)));
        });
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
            writer.writeObjectValue<BookingSchedulingPolicyImpl>("schedulingPolicy", (this.schedulingPolicy instanceof BookingSchedulingPolicyImpl? this.schedulingPolicy as BookingSchedulingPolicyImpl: new BookingSchedulingPolicyImpl(this.schedulingPolicy)));
        }
        if(this.services && this.services.length != 0){        const servicesArrValue: BookingServiceImpl[] = [];
        this.services?.forEach(element => {
            servicesArrValue.push((element instanceof BookingServiceImpl? element as BookingServiceImpl:new BookingServiceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingServiceImpl>("services", servicesArrValue);
        }
        if(this.staffMembers && this.staffMembers.length != 0){        const staffMembersArrValue: BookingStaffMemberBaseImpl[] = [];
        this.staffMembers?.forEach(element => {
            staffMembersArrValue.push((element instanceof BookingStaffMemberBaseImpl? element as BookingStaffMemberBaseImpl:new BookingStaffMemberBaseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingStaffMemberBaseImpl>("staffMembers", staffMembersArrValue);
        }
        if(this.webSiteUrl){
            writer.writeStringValue("webSiteUrl", this.webSiteUrl);
        }
    };
    /**
     * Gets the services property value. All the services offered by this business. Read-only. Nullable.
     * @returns a BookingServiceInterface
     */
    public get services() {
        return this._services;
    };
    /**
     * Sets the services property value. All the services offered by this business. Read-only. Nullable.
     * @param value Value to set for the services property.
     */
    public set services(value: BookingService[] | undefined) {
        if(value) {
            const servicesArrValue: BookingServiceImpl[] = [];
            this.services?.forEach(element => {
                servicesArrValue.push((element instanceof BookingServiceImpl? element as BookingServiceImpl:new BookingServiceImpl(element)));
            });
            this._services = servicesArrValue;
        }
    };
    /**
     * Gets the staffMembers property value. All the staff members that provide services in this business. Read-only. Nullable.
     * @returns a BookingStaffMemberBaseInterface
     */
    public get staffMembers() {
        return this._staffMembers;
    };
    /**
     * Sets the staffMembers property value. All the staff members that provide services in this business. Read-only. Nullable.
     * @param value Value to set for the staffMembers property.
     */
    public set staffMembers(value: BookingStaffMemberBase[] | undefined) {
        if(value) {
            const staffMembersArrValue: BookingStaffMemberBaseImpl[] = [];
            this.staffMembers?.forEach(element => {
                staffMembersArrValue.push((element instanceof BookingStaffMemberBaseImpl? element as BookingStaffMemberBaseImpl:new BookingStaffMemberBaseImpl(element)));
            });
            this._staffMembers = staffMembersArrValue;
        }
    };
    /**
     * Gets the webSiteUrl property value. The URL of the business web site. The webSiteUrl property, together with address, phone, appear in the footer of a business scheduling page.
     * @returns a string
     */
    public get webSiteUrl() {
        return this._webSiteUrl;
    };
    /**
     * Sets the webSiteUrl property value. The URL of the business web site. The webSiteUrl property, together with address, phone, appear in the footer of a business scheduling page.
     * @param value Value to set for the webSiteUrl property.
     */
    public set webSiteUrl(value: string | undefined) {
        if(value) {
            this._webSiteUrl = value;
        }
    };
}
