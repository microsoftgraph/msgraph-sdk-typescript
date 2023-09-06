import { type AutomaticRepliesMailTips } from './automaticRepliesMailTips';
import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { type LocaleInfo } from './localeInfo';
import { serializeDateTimeTimeZone } from './serializeDateTimeTimeZone';
import { serializeLocaleInfo } from './serializeLocaleInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAutomaticRepliesMailTips(writer: SerializationWriter, automaticRepliesMailTips: AutomaticRepliesMailTips | undefined = {} as AutomaticRepliesMailTips) : void {
        writer.writeStringValue("message", automaticRepliesMailTips.message);
        writer.writeObjectValue<LocaleInfo>("messageLanguage", automaticRepliesMailTips.messageLanguage, serializeLocaleInfo);
        writer.writeStringValue("@odata.type", automaticRepliesMailTips.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledEndTime", automaticRepliesMailTips.scheduledEndTime, serializeDateTimeTimeZone);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledStartTime", automaticRepliesMailTips.scheduledStartTime, serializeDateTimeTimeZone);
        writer.writeAdditionalData(automaticRepliesMailTips.additionalData);
}
