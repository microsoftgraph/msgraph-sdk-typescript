import {createLocaleInfoFromDiscriminatorValue} from '../../../models/createLocaleInfoFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import type {LocaleInfo} from '../../../models/localeInfo';
import {serializeLocaleInfo} from '../../../models/serializeLocaleInfo';
import type {SupportedLanguagesResponse} from './supportedLanguagesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSupportedLanguagesResponse(supportedLanguagesResponse: SupportedLanguagesResponse | undefined = {} as SupportedLanguagesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(supportedLanguagesResponse),
        "value": n => { supportedLanguagesResponse.value = n.getCollectionOfObjectValues<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
    }
}
