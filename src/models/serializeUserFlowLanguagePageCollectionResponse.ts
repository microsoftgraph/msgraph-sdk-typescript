import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserFlowLanguagePage} from './serializeUserFlowLanguagePage';
import type {UserFlowLanguagePage} from './userFlowLanguagePage';
import type {UserFlowLanguagePageCollectionResponse} from './userFlowLanguagePageCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguagePageCollectionResponse(writer: SerializationWriter, userFlowLanguagePageCollectionResponse: UserFlowLanguagePageCollectionResponse | undefined = {} as UserFlowLanguagePageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userFlowLanguagePageCollectionResponse)
        writer.writeCollectionOfObjectValues<UserFlowLanguagePage>("value", userFlowLanguagePageCollectionResponse.value, serializeUserFlowLanguagePage);
}
