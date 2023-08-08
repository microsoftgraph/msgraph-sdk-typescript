import {BookingPriceType} from './bookingPriceType';
import type {BookingQuestionAssignment} from './bookingQuestionAssignment';
import type {BookingReminder} from './bookingReminder';
import type {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import type {BookingService} from './bookingService';
import type {Location} from './location';
import {serializeBookingQuestionAssignment} from './serializeBookingQuestionAssignment';
import {serializeBookingReminder} from './serializeBookingReminder';
import {serializeBookingSchedulingPolicy} from './serializeBookingSchedulingPolicy';
import {serializeEntity} from './serializeEntity';
import {serializeLocation} from './serializeLocation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function serializeBookingService(writer: SerializationWriter, bookingService: BookingService | undefined = {} as BookingService) : void {
        serializeEntity(writer, bookingService)
        writer.writeStringValue("additionalInformation", bookingService.additionalInformation);
        writer.writeCollectionOfObjectValues<BookingQuestionAssignment>("customQuestions", bookingService.customQuestions, serializeBookingQuestionAssignment);
        writer.writeDurationValue("defaultDuration", bookingService.defaultDuration);
        writer.writeObjectValue<Location>("defaultLocation", bookingService.defaultLocation, serializeLocation);
        writer.writeNumberValue("defaultPrice", bookingService.defaultPrice);
        writer.writeEnumValue<BookingPriceType>("defaultPriceType", bookingService.defaultPriceType);
        writer.writeCollectionOfObjectValues<BookingReminder>("defaultReminders", bookingService.defaultReminders, serializeBookingReminder);
        writer.writeStringValue("description", bookingService.description);
        writer.writeStringValue("displayName", bookingService.displayName);
        writer.writeBooleanValue("isAnonymousJoinEnabled", bookingService.isAnonymousJoinEnabled);
        writer.writeBooleanValue("isHiddenFromCustomers", bookingService.isHiddenFromCustomers);
        writer.writeBooleanValue("isLocationOnline", bookingService.isLocationOnline);
        writer.writeStringValue("languageTag", bookingService.languageTag);
        writer.writeNumberValue("maximumAttendeesCount", bookingService.maximumAttendeesCount);
        writer.writeStringValue("notes", bookingService.notes);
        writer.writeDurationValue("postBuffer", bookingService.postBuffer);
        writer.writeDurationValue("preBuffer", bookingService.preBuffer);
        writer.writeObjectValue<BookingSchedulingPolicy>("schedulingPolicy", bookingService.schedulingPolicy, serializeBookingSchedulingPolicy);
        writer.writeBooleanValue("smsNotificationsEnabled", bookingService.smsNotificationsEnabled);
        writer.writeCollectionOfPrimitiveValues<string>("staffMemberIds", bookingService.staffMemberIds);
}
