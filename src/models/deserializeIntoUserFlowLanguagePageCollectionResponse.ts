import { createUserFlowLanguagePageFromDiscriminatorValue } from './createUserFlowLanguagePageFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserFlowLanguagePage } from './serializeUserFlowLanguagePage';
import { type UserFlowLanguagePage } from './userFlowLanguagePage';
import { type UserFlowLanguagePageCollectionResponse } from './userFlowLanguagePageCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguagePageCollectionResponse(userFlowLanguagePageCollectionResponse: UserFlowLanguagePageCollectionResponse | undefined = {} as UserFlowLanguagePageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userFlowLanguagePageCollectionResponse),
        "value": n => { userFlowLanguagePageCollectionResponse.value = n.getCollectionOfObjectValues<UserFlowLanguagePage>(createUserFlowLanguagePageFromDiscriminatorValue); },
    }
}
