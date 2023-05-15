import {BookingPriceType} from './bookingPriceType';
import {BookingQuestionAssignment} from './bookingQuestionAssignment';
import {BookingReminder} from './bookingReminder';
import {BookingSchedulingPolicy} from './bookingSchedulingPolicy';
import {BookingService} from './bookingService';
import {createBookingQuestionAssignmentFromDiscriminatorValue} from './createBookingQuestionAssignmentFromDiscriminatorValue';
import {createBookingReminderFromDiscriminatorValue} from './createBookingReminderFromDiscriminatorValue';
import {createBookingSchedulingPolicyFromDiscriminatorValue} from './createBookingSchedulingPolicyFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Location} from './location';
import {serializeBookingQuestionAssignment} from './serializeBookingQuestionAssignment';
import {serializeBookingReminder} from './serializeBookingReminder';
import {serializeBookingSchedulingPolicy} from './serializeBookingSchedulingPolicy';
import {serializeLocation} from './serializeLocation';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingService(bookingService: BookingService | undefined = {} as BookingService) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(bookingService),
        "additionalInformation": n => { bookingService.additionalInformation = n.getStringValue(); },
        "customQuestions": n => { bookingService.customQuestions = n.getCollectionOfObjectValues<BookingQuestionAssignment>(createBookingQuestionAssignmentFromDiscriminatorValue); },
        "defaultDuration": n => { bookingService.defaultDuration = n.getDurationValue(); },
        "defaultLocation": n => { bookingService.defaultLocation = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
        "defaultPrice": n => { bookingService.defaultPrice = n.getNumberValue(); },
        "defaultPriceType": n => { bookingService.defaultPriceType = n.getEnumValue<BookingPriceType>(BookingPriceType); },
        "defaultReminders": n => { bookingService.defaultReminders = n.getCollectionOfObjectValues<BookingReminder>(createBookingReminderFromDiscriminatorValue); },
        "description": n => { bookingService.description = n.getStringValue(); },
        "displayName": n => { bookingService.displayName = n.getStringValue(); },
        "isAnonymousJoinEnabled": n => { bookingService.isAnonymousJoinEnabled = n.getBooleanValue(); },
        "isHiddenFromCustomers": n => { bookingService.isHiddenFromCustomers = n.getBooleanValue(); },
        "isLocationOnline": n => { bookingService.isLocationOnline = n.getBooleanValue(); },
        "languageTag": n => { bookingService.languageTag = n.getStringValue(); },
        "maximumAttendeesCount": n => { bookingService.maximumAttendeesCount = n.getNumberValue(); },
        "notes": n => { bookingService.notes = n.getStringValue(); },
        "postBuffer": n => { bookingService.postBuffer = n.getDurationValue(); },
        "preBuffer": n => { bookingService.preBuffer = n.getDurationValue(); },
        "schedulingPolicy": n => { bookingService.schedulingPolicy = n.getObjectValue<BookingSchedulingPolicy>(createBookingSchedulingPolicyFromDiscriminatorValue); },
        "smsNotificationsEnabled": n => { bookingService.smsNotificationsEnabled = n.getBooleanValue(); },
        "staffMemberIds": n => { bookingService.staffMemberIds = n.getCollectionOfPrimitiveValues<string>(); },
        "webUrl": n => { bookingService.webUrl = n.getStringValue(); },
    }
}
