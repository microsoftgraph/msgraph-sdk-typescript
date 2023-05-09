import {BookingAppointment} from './bookingAppointment';
import {BookingCustomerInformationBase} from './bookingCustomerInformationBase';
import {BookingPriceType} from './bookingPriceType';
import {BookingReminder} from './bookingReminder';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Location} from './location';
import {serializeBookingCustomerInformationBase} from './serializeBookingCustomerInformationBase';
import {serializeBookingReminder} from './serializeBookingReminder';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEntity} from './serializeEntity';
import {serializeLocation} from './serializeLocation';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingAppointment(writer: SerializationWriter, bookingAppointment: BookingAppointment | undefined = {} as BookingAppointment) : void {
        serializeEntity(writer, bookingAppointment)
        writer.writeStringValue("additionalInformation", bookingAppointment.additionalInformation);
        writer.writeStringValue("anonymousJoinWebUrl", bookingAppointment.anonymousJoinWebUrl);
        writer.writeCollectionOfObjectValues<BookingCustomerInformationBase>("customers", bookingAppointment.customers, serializeBookingCustomerInformationBase);
        writer.writeStringValue("customerTimeZone", bookingAppointment.customerTimeZone);
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", bookingAppointment.endDateTime, serializeDateTimeTimeZone);
        writer.writeBooleanValue("isLocationOnline", bookingAppointment.isLocationOnline);
        writer.writeStringValue("joinWebUrl", bookingAppointment.joinWebUrl);
        writer.writeNumberValue("maximumAttendeesCount", bookingAppointment.maximumAttendeesCount);
        writer.writeBooleanValue("optOutOfCustomerEmail", bookingAppointment.optOutOfCustomerEmail);
        writer.writeDurationValue("postBuffer", bookingAppointment.postBuffer);
        writer.writeDurationValue("preBuffer", bookingAppointment.preBuffer);
        writer.writeNumberValue("price", bookingAppointment.price);
        writer.writeEnumValue<BookingPriceType>("priceType", bookingAppointment.priceType);
        writer.writeCollectionOfObjectValues<BookingReminder>("reminders", bookingAppointment.reminders, serializeBookingReminder);
        writer.writeStringValue("selfServiceAppointmentId", bookingAppointment.selfServiceAppointmentId);
        writer.writeStringValue("serviceId", bookingAppointment.serviceId);
        writer.writeObjectValue<Location>("serviceLocation", bookingAppointment.serviceLocation, serializeLocation);
        writer.writeStringValue("serviceName", bookingAppointment.serviceName);
        writer.writeStringValue("serviceNotes", bookingAppointment.serviceNotes);
        writer.writeBooleanValue("smsNotificationsEnabled", bookingAppointment.smsNotificationsEnabled);
        writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", bookingAppointment.staffMemberIds);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", bookingAppointment.startDateTime, serializeDateTimeTimeZone);
}
