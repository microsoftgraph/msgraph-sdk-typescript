import {AutomaticRepliesMailTips} from './automaticRepliesMailTips';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {LocaleInfo} from './localeInfo';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAutomaticRepliesMailTips(automaticRepliesMailTips: AutomaticRepliesMailTips | undefined = {} as AutomaticRepliesMailTips) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { automaticRepliesMailTips.message = n.getStringValue(); },
        "messageLanguage": n => { automaticRepliesMailTips.messageLanguage = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
        "@odata.type": n => { automaticRepliesMailTips.odataType = n.getStringValue(); },
        "scheduledEndTime": n => { automaticRepliesMailTips.scheduledEndTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "scheduledStartTime": n => { automaticRepliesMailTips.scheduledStartTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
