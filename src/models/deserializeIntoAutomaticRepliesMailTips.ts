import type {AutomaticRepliesMailTips} from './automaticRepliesMailTips';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import type {DateTimeTimeZone} from './dateTimeTimeZone';
import type {LocaleInfo} from './localeInfo';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAutomaticRepliesMailTips(automaticRepliesMailTips: AutomaticRepliesMailTips | undefined = {} as AutomaticRepliesMailTips) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { automaticRepliesMailTips.message = n.getStringValue(); },
        "messageLanguage": n => { automaticRepliesMailTips.messageLanguage = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
        "@odata.type": n => { automaticRepliesMailTips.odataType = n.getStringValue(); },
        "scheduledEndTime": n => { automaticRepliesMailTips.scheduledEndTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "scheduledStartTime": n => { automaticRepliesMailTips.scheduledStartTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
