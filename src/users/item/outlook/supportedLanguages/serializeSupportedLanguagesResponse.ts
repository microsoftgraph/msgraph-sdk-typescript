import { type LocaleInfo } from '../../../../models/localeInfo';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeLocaleInfo } from '../../../../models/serializeLocaleInfo';
import { type SupportedLanguagesResponse } from './supportedLanguagesResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSupportedLanguagesResponse(writer: SerializationWriter, supportedLanguagesResponse: SupportedLanguagesResponse | undefined = {} as SupportedLanguagesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, supportedLanguagesResponse)
        writer.writeCollectionOfObjectValues<LocaleInfo>("value", supportedLanguagesResponse.value, serializeLocaleInfo);
}
