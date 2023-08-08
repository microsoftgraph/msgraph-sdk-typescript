import type {LocaleInfo} from './localeInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocaleInfo(writer: SerializationWriter, localeInfo: LocaleInfo | undefined = {} as LocaleInfo) : void {
        writer.writeStringValue("displayName", localeInfo.displayName);
        writer.writeStringValue("locale", localeInfo.locale);
        writer.writeStringValue("@odata.type", localeInfo.odataType);
        writer.writeAdditionalData(localeInfo.additionalData);
}
