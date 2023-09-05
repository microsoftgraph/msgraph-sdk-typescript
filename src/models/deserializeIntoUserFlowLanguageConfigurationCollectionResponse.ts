import { createUserFlowLanguageConfigurationFromDiscriminatorValue } from './createUserFlowLanguageConfigurationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserFlowLanguageConfiguration } from './serializeUserFlowLanguageConfiguration';
import { type UserFlowLanguageConfiguration } from './userFlowLanguageConfiguration';
import { type UserFlowLanguageConfigurationCollectionResponse } from './userFlowLanguageConfigurationCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguageConfigurationCollectionResponse(userFlowLanguageConfigurationCollectionResponse: UserFlowLanguageConfigurationCollectionResponse | undefined = {} as UserFlowLanguageConfigurationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userFlowLanguageConfigurationCollectionResponse),
        "value": n => { userFlowLanguageConfigurationCollectionResponse.value = n.getCollectionOfObjectValues<UserFlowLanguageConfiguration>(createUserFlowLanguageConfigurationFromDiscriminatorValue); },
    }
}
