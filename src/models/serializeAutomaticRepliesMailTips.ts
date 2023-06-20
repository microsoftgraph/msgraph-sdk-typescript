import {AutomaticRepliesMailTips} from './automaticRepliesMailTips';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {LocaleInfo} from './localeInfo';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocaleInfo} from './serializeLocaleInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAutomaticRepliesMailTips(automaticRepliesMailTips: AutomaticRepliesMailTips | undefined = {} as AutomaticRepliesMailTips, writer: SerializationWriter) : void {
        writer.writeStringValue("message", automaticRepliesMailTips.message);
        writer.writeObjectValue<LocaleInfo>("messageLanguage", automaticRepliesMailTips.messageLanguage, serializeLocaleInfo);
        writer.writeStringValue("@odata.type", automaticRepliesMailTips.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledEndTime", automaticRepliesMailTips.scheduledEndTime, serializeDateTimeTimeZone);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledStartTime", automaticRepliesMailTips.scheduledStartTime, serializeDateTimeTimeZone);
        writer.writeAdditionalData(automaticRepliesMailTips.additionalData);
}
