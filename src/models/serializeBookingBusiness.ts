import {BookingAppointment} from './bookingAppointment';
import {BookingBusiness} from './bookingBusiness';
import {BookingCustomerBase} from './bookingCustomerBase';
import {BookingCustomQuestion} from './bookingCustomQuestion';
import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {BookingService} from './bookingService';
import {BookingStaffMemberBase} from './bookingStaffMemberBase';
import {BookingWorkHours} from './bookingWorkHours';
import {PhysicalAddress} from './physicalAddress';
import {serializeBookingAppointment} from './serializeBookingAppointment';
import {serializeBookingCustomerBase} from './serializeBookingCustomerBase';
import {serializeBookingCustomQuestion} from './serializeBookingCustomQuestion';
import {serializeBookingSchedulingPolicy} from './serializeBookingSchedulingPolicy';
import {serializeBookingService} from './serializeBookingService';
import {serializeBookingStaffMemberBase} from './serializeBookingStaffMemberBase';
import {serializeBookingWorkHours} from './serializeBookingWorkHours';
import {serializeEntity} from './serializeEntity';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingBusiness(writer: SerializationWriter, bookingBusiness: BookingBusiness | undefined = {} as BookingBusiness) : void {
        serializeEntity(writer, bookingBusiness)
        writer.writeObjectValue<PhysicalAddress>("address", bookingBusiness.address, serializePhysicalAddress);
        writer.writeCollectionOfObjectValues<BookingAppointment>("appointments", bookingBusiness.appointments, serializeBookingAppointment);
        writer.writeCollectionOfObjectValues<BookingWorkHours>("businessHours", bookingBusiness.businessHours, serializeBookingWorkHours);
        writer.writeStringValue("businessType", bookingBusiness.businessType);
        writer.writeCollectionOfObjectValues<BookingAppointment>("calendarView", bookingBusiness.calendarView, serializeBookingAppointment);
        writer.writeCollectionOfObjectValues<BookingCustomerBase>("customers", bookingBusiness.customers, serializeBookingCustomerBase);
        writer.writeCollectionOfObjectValues<BookingCustomQuestion>("customQuestions", bookingBusiness.customQuestions, serializeBookingCustomQuestion);
        writer.writeStringValue("defaultCurrencyIso", bookingBusiness.defaultCurrencyIso);
        writer.writeStringValue("displayName", bookingBusiness.displayName);
        writer.writeStringValue("email", bookingBusiness.email);
        writer.writeStringValue("languageTag", bookingBusiness.languageTag);
        writer.writeStringValue("phone", bookingBusiness.phone);
        writer.writeObjectValue<BookingSchedulingPolicy>("schedulingPolicy", bookingBusiness.schedulingPolicy, serializeBookingSchedulingPolicy);
        writer.writeCollectionOfObjectValues<BookingService>("services", bookingBusiness.services, serializeBookingService);
        writer.writeCollectionOfObjectValues<BookingStaffMemberBase>("staffMembers", bookingBusiness.staffMembers, serializeBookingStaffMemberBase);
        writer.writeStringValue("webSiteUrl", bookingBusiness.webSiteUrl);
}
