import {BookingAppointment} from './bookingAppointment';
import {BookingCustomerInformationBase} from './bookingCustomerInformationBase';
import {BookingPriceType} from './bookingPriceType';
import {BookingReminder} from './bookingReminder';
import {createBookingCustomerInformationBaseFromDiscriminatorValue} from './createBookingCustomerInformationBaseFromDiscriminatorValue';
import {createBookingReminderFromDiscriminatorValue} from './createBookingReminderFromDiscriminatorValue';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Location} from './location';
import {serializeBookingCustomerInformationBase} from './serializeBookingCustomerInformationBase';
import {serializeBookingReminder} from './serializeBookingReminder';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocation} from './serializeLocation';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingAppointment(bookingAppointment: BookingAppointment | undefined = {} as BookingAppointment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingAppointment),
        "additionalInformation": n => { bookingAppointment.additionalInformation = n.getStringValue(); },
        "anonymousJoinWebUrl": n => { bookingAppointment.anonymousJoinWebUrl = n.getStringValue(); },
        "customers": n => { bookingAppointment.customers = n.getCollectionOfObjectValues<BookingCustomerInformationBase>(createBookingCustomerInformationBaseFromDiscriminatorValue); },
        "customerTimeZone": n => { bookingAppointment.customerTimeZone = n.getStringValue(); },
        "duration": n => { bookingAppointment.duration = n.getDurationValue(); },
        "endDateTime": n => { bookingAppointment.endDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "filledAttendeesCount": n => { bookingAppointment.filledAttendeesCount = n.getNumberValue(); },
        "isLocationOnline": n => { bookingAppointment.isLocationOnline = n.getBooleanValue(); },
        "joinWebUrl": n => { bookingAppointment.joinWebUrl = n.getStringValue(); },
        "maximumAttendeesCount": n => { bookingAppointment.maximumAttendeesCount = n.getNumberValue(); },
        "optOutOfCustomerEmail": n => { bookingAppointment.optOutOfCustomerEmail = n.getBooleanValue(); },
        "postBuffer": n => { bookingAppointment.postBuffer = n.getDurationValue(); },
        "preBuffer": n => { bookingAppointment.preBuffer = n.getDurationValue(); },
        "price": n => { bookingAppointment.price = n.getNumberValue(); },
        "priceType": n => { bookingAppointment.priceType = n.getEnumValue<BookingPriceType>(BookingPriceType); },
        "reminders": n => { bookingAppointment.reminders = n.getCollectionOfObjectValues<BookingReminder>(createBookingReminderFromDiscriminatorValue); },
        "selfServiceAppointmentId": n => { bookingAppointment.selfServiceAppointmentId = n.getStringValue(); },
        "serviceId": n => { bookingAppointment.serviceId = n.getStringValue(); },
        "serviceLocation": n => { bookingAppointment.serviceLocation = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
        "serviceName": n => { bookingAppointment.serviceName = n.getStringValue(); },
        "serviceNotes": n => { bookingAppointment.serviceNotes = n.getStringValue(); },
        "smsNotificationsEnabled": n => { bookingAppointment.smsNotificationsEnabled = n.getBooleanValue(); },
        "staffMemberIds": n => { bookingAppointment.staffMemberIds = n.getCollectionOfPrimitiveValues<string>(); },
        "startDateTime": n => { bookingAppointment.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
