import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserFlowLanguagePage} from './serializeUserFlowLanguagePage';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {UserFlowLanguagePageCollectionResponse} from './userFlowLanguagePageCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguagePageCollectionResponse(writer: SerializationWriter, userFlowLanguagePageCollectionResponse: UserFlowLanguagePageCollectionResponse | undefined = {} as UserFlowLanguagePageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userFlowLanguagePageCollectionResponse)
        writer.writeCollectionOfObjectValues<UserFlowLanguagePage>("value", userFlowLanguagePageCollectionResponse.value, serializeUserFlowLanguagePage);
}
