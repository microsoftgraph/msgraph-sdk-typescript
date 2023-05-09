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
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PhysicalAddress} from './physicalAddress';
import {serializeBookingAppointment} from './serializeBookingAppointment';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {serializeBookingCustomQuestion} from './serializeBookingCustomQuestion';
import {serializeBookingSchedulingPolicy} from './serializeBookingSchedulingPolicy';
import {serializeBookingService} from './serializeBookingService';
import {serializeBookingStaffMemberBase} from './serializeBookingStaffMemberBase';
import {serializeBookingWorkHours} from './serializeBookingWorkHours';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingBusiness(bookingBusiness: BookingBusiness | undefined = {} as BookingBusiness) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingBusiness),
        "address": n => { bookingBusiness.address = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "appointments": n => { bookingBusiness.appointments = n.getCollectionOfObjectValues<BookingAppointment>(createBookingAppointmentFromDiscriminatorValue); },
        "businessHours": n => { bookingBusiness.businessHours = n.getCollectionOfObjectValues<BookingWorkHours>(createBookingWorkHoursFromDiscriminatorValue); },
        "businessType": n => { bookingBusiness.businessType = n.getStringValue(); },
        "calendarView": n => { bookingBusiness.calendarView = n.getCollectionOfObjectValues<BookingAppointment>(createBookingAppointmentFromDiscriminatorValue); },
        "customers": n => { bookingBusiness.customers = n.getCollectionOfObjectValues<BookingCustomerBase>(createBookingCustomerBaseFromDiscriminatorValue); },
        "customQuestions": n => { bookingBusiness.customQuestions = n.getCollectionOfObjectValues<BookingCustomQuestion>(createBookingCustomQuestionFromDiscriminatorValue); },
        "defaultCurrencyIso": n => { bookingBusiness.defaultCurrencyIso = n.getStringValue(); },
        "displayName": n => { bookingBusiness.displayName = n.getStringValue(); },
        "email": n => { bookingBusiness.email = n.getStringValue(); },
        "isPublished": n => { bookingBusiness.isPublished = n.getBooleanValue(); },
        "languageTag": n => { bookingBusiness.languageTag = n.getStringValue(); },
        "phone": n => { bookingBusiness.phone = n.getStringValue(); },
        "publicUrl": n => { bookingBusiness.publicUrl = n.getStringValue(); },
        "schedulingPolicy": n => { bookingBusiness.schedulingPolicy = n.getObjectValue<BookingSchedulingPolicy>(createBookingSchedulingPolicyFromDiscriminatorValue); },
        "services": n => { bookingBusiness.services = n.getCollectionOfObjectValues<BookingService>(createBookingServiceFromDiscriminatorValue); },
        "staffMembers": n => { bookingBusiness.staffMembers = n.getCollectionOfObjectValues<BookingStaffMemberBase>(createBookingStaffMemberBaseFromDiscriminatorValue); },
        "webSiteUrl": n => { bookingBusiness.webSiteUrl = n.getStringValue(); },
    }
}
