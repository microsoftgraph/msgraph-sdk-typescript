import {LocaleInfo} from './localeInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocaleInfo(localeInfo: LocaleInfo | undefined = {} as LocaleInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { localeInfo.displayName = n.getStringValue(); },
        "locale": n => { localeInfo.locale = n.getStringValue(); },
        "@odata.type": n => { localeInfo.odataType = n.getStringValue(); },
    }
}
