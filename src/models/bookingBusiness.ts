import {BookingAppointment} from './bookingAppointment';
import {BookingCustomerBase} from './bookingCustomerBase';
import {BookingCustomQuestion} from './bookingCustomQuestion';
import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {BookingService} from './bookingService';
import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {BookingWorkHours} from './bookingWorkHours';
import {Entity} from './entity';
import {PhysicalAddress} from './physicalAddress';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingBusiness extends Entity, Parsable {
    /**
     * The street address of the business. The address property, together with phone and webSiteUrl, appear in the footer of a business scheduling page. The attribute type of physicalAddress is not supported in v1.0. Internally we map the addresses to the type others.
     */
    address?: PhysicalAddress | undefined;
    /**
     * All the appointments of this business. Read-only. Nullable.
     */
    appointments?: BookingAppointment[] | undefined;
    /**
     * The hours of operation for the business.
     */
    businessHours?: BookingWorkHours[] | undefined;
    /**
     * The type of business.
     */
    businessType?: string | undefined;
    /**
     * The set of appointments of this business in a specified date range. Read-only. Nullable.
     */
    calendarView?: BookingAppointment[] | undefined;
    /**
     * All the customers of this business. Read-only. Nullable.
     */
    customers?: BookingCustomerBase[] | undefined;
    /**
     * All the custom questions of this business. Read-only. Nullable.
     */
    customQuestions?: BookingCustomQuestion[] | undefined;
    /**
     * The code for the currency that the business operates in on Microsoft Bookings.
     */
    defaultCurrencyIso?: string | undefined;
    /**
     * The name of the business, which interfaces with customers. This name appears at the top of the business scheduling page.
     */
    displayName?: string | undefined;
    /**
     * The email address for the business.
     */
    email?: string | undefined;
    /**
     * The scheduling page has been made available to external customers. Use the publish and unpublish actions to set this property. Read-only.
     */
    isPublished?: boolean | undefined;
    /**
     * The language of the self-service booking page.
     */
    languageTag?: string | undefined;
    /**
     * The telephone number for the business. The phone property, together with address and webSiteUrl, appear in the footer of a business scheduling page.
     */
    phone?: string | undefined;
    /**
     * The URL for the scheduling page, which is set after you publish or unpublish the page. Read-only.
     */
    publicUrl?: string | undefined;
    /**
     * Specifies how bookings can be created for this business.
     */
    schedulingPolicy?: BookingSchedulingPolicy | undefined;
    /**
     * All the services offered by this business. Read-only. Nullable.
     */
    services?: BookingService[] | undefined;
    /**
     * All the staff members that provide services in this business. Read-only. Nullable.
     */
    staffMembers?: BookingStaffMemberBase[] | undefined;
    /**
     * The URL of the business web site. The webSiteUrl property, together with address, phone, appear in the footer of a business scheduling page.
     */
    webSiteUrl?: string | undefined;
}
