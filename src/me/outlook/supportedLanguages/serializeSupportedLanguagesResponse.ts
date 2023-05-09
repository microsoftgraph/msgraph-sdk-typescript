import {LocaleInfo} from '../../../models/localeInfo';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeLocaleInfo} from '../../../models/serializeLocaleInfo';
import {SupportedLanguagesResponse} from './supportedLanguagesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSupportedLanguagesResponse(writer: SerializationWriter, supportedLanguagesResponse: SupportedLanguagesResponse | undefined = {} as SupportedLanguagesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, supportedLanguagesResponse)
        writer.writeCollectionOfObjectValues<LocaleInfo>("value", supportedLanguagesResponse.value, serializeLocaleInfo);
}
