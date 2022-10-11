import {createBookingAppointmentFromDiscriminatorValue} from './createBookingAppointmentFromDiscriminatorValue';
import {createBookingCustomerBaseFromDiscriminatorValue} from './createBookingCustomerBaseFromDiscriminatorValue';
import {createBookingCustomQuestionFromDiscriminatorValue} from './createBookingCustomQuestionFromDiscriminatorValue';
import {createBookingSchedulingPolicyFromDiscriminatorValue} from './createBookingSchedulingPolicyFromDiscriminatorValue';
import {createBookingServiceFromDiscriminatorValue} from './createBookingServiceFromDiscriminatorValue';
import {createBookingStaffMemberBaseFromDiscriminatorValue} from './createBookingStaffMemberBaseFromDiscriminatorValue';
import {createBookingWorkHoursFromDiscriminatorValue} from './createBookingWorkHoursFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {BookingAppointment, BookingCustomerBase, BookingCustomQuestion, BookingSchedulingPolicy, BookingService, BookingStaffMemberBase, BookingWorkHours, Entity, PhysicalAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BookingBusiness extends Entity implements Parsable {
    /** The street address of the business. The address property, together with phone and webSiteUrl, appear in the footer of a business scheduling page. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others. */
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
    private readonly _isPublished?: boolean | undefined;
    /** The languageTag property */
    private _languageTag?: string | undefined;
    /** The telephone number for the business. The phone property, together with address and webSiteUrl, appear in the footer of a business scheduling page. */
    private _phone?: string | undefined;
    /** The URL for the scheduling page, which is set after you publish or unpublish the page. Read-only. */
    private readonly _publicUrl?: string | undefined;
    /** Specifies how bookings can be created for this business. */
    private _schedulingPolicy?: BookingSchedulingPolicy | undefined;
    /** All the services offered by this business. Read-only. Nullable. */
    private _services?: BookingService[] | undefined;
    /** All the staff members that provide services in this business. Read-only. Nullable. */
    private _staffMembers?: BookingStaffMemberBase[] | undefined;
    /** The URL of the business web site. The webSiteUrl property, together with address, phone, appear in the footer of a business scheduling page. */
    private _webSiteUrl?: string | undefined;
    /**
     * Gets the address property value. The street address of the business. The address property, together with phone and webSiteUrl, appear in the footer of a business scheduling page. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others.
     * @returns a physicalAddress
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The street address of the business. The address property, together with phone and webSiteUrl, appear in the footer of a business scheduling page. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        this._address = value;
    };
    /**
     * Gets the appointments property value. All the appointments of this business. Read-only. Nullable.
     * @returns a bookingAppointment
     */
    public get appointments() {
        return this._appointments;
    };
    /**
     * Sets the appointments property value. All the appointments of this business. Read-only. Nullable.
     * @param value Value to set for the appointments property.
     */
    public set appointments(value: BookingAppointment[] | undefined) {
        this._appointments = value;
    };
    /**
     * Gets the businessHours property value. The hours of operation for the business.
     * @returns a bookingWorkHours
     */
    public get businessHours() {
        return this._businessHours;
    };
    /**
     * Sets the businessHours property value. The hours of operation for the business.
     * @param value Value to set for the businessHours property.
     */
    public set businessHours(value: BookingWorkHours[] | undefined) {
        this._businessHours = value;
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
        this._businessType = value;
    };
    /**
     * Gets the calendarView property value. The set of appointments of this business in a specified date range. Read-only. Nullable.
     * @returns a bookingAppointment
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The set of appointments of this business in a specified date range. Read-only. Nullable.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: BookingAppointment[] | undefined) {
        this._calendarView = value;
    };
    /**
     * Instantiates a new BookingBusiness and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.bookingBusiness";
    };
    /**
     * Gets the customers property value. All the customers of this business. Read-only. Nullable.
     * @returns a bookingCustomerBase
     */
    public get customers() {
        return this._customers;
    };
    /**
     * Sets the customers property value. All the customers of this business. Read-only. Nullable.
     * @param value Value to set for the customers property.
     */
    public set customers(value: BookingCustomerBase[] | undefined) {
        this._customers = value;
    };
    /**
     * Gets the customQuestions property value. All the custom questions of this business. Read-only. Nullable.
     * @returns a bookingCustomQuestion
     */
    public get customQuestions() {
        return this._customQuestions;
    };
    /**
     * Sets the customQuestions property value. All the custom questions of this business. Read-only. Nullable.
     * @param value Value to set for the customQuestions property.
     */
    public set customQuestions(value: BookingCustomQuestion[] | undefined) {
        this._customQuestions = value;
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
        this._defaultCurrencyIso = value;
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
        this._displayName = value;
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
        this._email = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "address": n => { this.address = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "appointments": n => { this.appointments = n.getCollectionOfObjectValues<BookingAppointment>(createBookingAppointmentFromDiscriminatorValue); },
            "businessHours": n => { this.businessHours = n.getCollectionOfObjectValues<BookingWorkHours>(createBookingWorkHoursFromDiscriminatorValue); },
            "businessType": n => { this.businessType = n.getStringValue(); },
            "calendarView": n => { this.calendarView = n.getCollectionOfObjectValues<BookingAppointment>(createBookingAppointmentFromDiscriminatorValue); },
            "customers": n => { this.customers = n.getCollectionOfObjectValues<BookingCustomerBase>(createBookingCustomerBaseFromDiscriminatorValue); },
            "customQuestions": n => { this.customQuestions = n.getCollectionOfObjectValues<BookingCustomQuestion>(createBookingCustomQuestionFromDiscriminatorValue); },
            "defaultCurrencyIso": n => { this.defaultCurrencyIso = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "email": n => { this.email = n.getStringValue(); },
            "isPublished": n => { this.isPublished = n.getBooleanValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "phone": n => { this.phone = n.getStringValue(); },
            "publicUrl": n => { this.publicUrl = n.getStringValue(); },
            "schedulingPolicy": n => { this.schedulingPolicy = n.getObjectValue<BookingSchedulingPolicy>(createBookingSchedulingPolicyFromDiscriminatorValue); },
            "services": n => { this.services = n.getCollectionOfObjectValues<BookingService>(createBookingServiceFromDiscriminatorValue); },
            "staffMembers": n => { this.staffMembers = n.getCollectionOfObjectValues<BookingStaffMemberBase>(createBookingStaffMemberBaseFromDiscriminatorValue); },
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
        this._isPublished = value;
    };
    /**
     * Gets the languageTag property value. The languageTag property
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. The languageTag property
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
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
        this._phone = value;
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
        this._publicUrl = value;
    };
    /**
     * Gets the schedulingPolicy property value. Specifies how bookings can be created for this business.
     * @returns a bookingSchedulingPolicy
     */
    public get schedulingPolicy() {
        return this._schedulingPolicy;
    };
    /**
     * Sets the schedulingPolicy property value. Specifies how bookings can be created for this business.
     * @param value Value to set for the schedulingPolicy property.
     */
    public set schedulingPolicy(value: BookingSchedulingPolicy | undefined) {
        this._schedulingPolicy = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PhysicalAddress>("address", this.address);
        writer.writeCollectionOfObjectValues<BookingAppointment>("appointments", this.appointments);
        writer.writeCollectionOfObjectValues<BookingWorkHours>("businessHours", this.businessHours);
        writer.writeStringValue("businessType", this.businessType);
        writer.writeCollectionOfObjectValues<BookingAppointment>("calendarView", this.calendarView);
        writer.writeCollectionOfObjectValues<BookingCustomerBase>("customers", this.customers);
        writer.writeCollectionOfObjectValues<BookingCustomQuestion>("customQuestions", this.customQuestions);
        writer.writeStringValue("defaultCurrencyIso", this.defaultCurrencyIso);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("email", this.email);
        writer.writeStringValue("languageTag", this.languageTag);
        writer.writeStringValue("phone", this.phone);
        writer.writeObjectValue<BookingSchedulingPolicy>("schedulingPolicy", this.schedulingPolicy);
        writer.writeCollectionOfObjectValues<BookingService>("services", this.services);
        writer.writeCollectionOfObjectValues<BookingStaffMemberBase>("staffMembers", this.staffMembers);
        writer.writeStringValue("webSiteUrl", this.webSiteUrl);
    };
    /**
     * Gets the services property value. All the services offered by this business. Read-only. Nullable.
     * @returns a bookingService
     */
    public get services() {
        return this._services;
    };
    /**
     * Sets the services property value. All the services offered by this business. Read-only. Nullable.
     * @param value Value to set for the services property.
     */
    public set services(value: BookingService[] | undefined) {
        this._services = value;
    };
    /**
     * Gets the staffMembers property value. All the staff members that provide services in this business. Read-only. Nullable.
     * @returns a bookingStaffMemberBase
     */
    public get staffMembers() {
        return this._staffMembers;
    };
    /**
     * Sets the staffMembers property value. All the staff members that provide services in this business. Read-only. Nullable.
     * @param value Value to set for the staffMembers property.
     */
    public set staffMembers(value: BookingStaffMemberBase[] | undefined) {
        this._staffMembers = value;
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
        this._webSiteUrl = value;
    };
}
